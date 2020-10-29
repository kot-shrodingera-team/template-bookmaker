import { log, getElement } from '@kot-shrodingera-team/germes-utils';
import NewUrlError from './errors/newUrlError';

const preCheck = async (): Promise<void> => {
  const { pathname } = window.location;
  if (pathname.includes(worker.EventId)) {
    await Promise.race([
      getElement('.basket-empty'),
      getElement('.busket-item'),
    ]);
    return;
  }
  if (pathname !== '/betting') {
    log('Открыт не Live', 'steelblue');
    window.location.href = new URL('/betting', worker.BookmakerMainUrl).href;
    throw new NewUrlError('Переходим на Live');
  }
  log('Открыт Live', 'steelblue');
  await Promise.race([getElement('.basket-empty'), getElement('.busket-item')]);
};

export default preCheck;
