import { getElement, log } from '@kot-shrodingera-team/germes-utils';
import JsFailError from './errors/jsFailError';
import NewUrlError from './errors/newUrlError';

const openEvent = async (): Promise<void> => {
  if (window.location.pathname.includes(worker.EventId)) {
    log('Открыта страница нужного события', 'steelblue');
    return;
  }
  const event = (await getElement(`a[id$="${worker.EventId}"]`)) as HTMLElement;
  if (!event) {
    throw new JsFailError('Событие не найдено');
  }
  log('Событие найдено', 'steelblue');
  event.click();
  throw new NewUrlError('Переходим на страницу события');
};

export default openEvent;
