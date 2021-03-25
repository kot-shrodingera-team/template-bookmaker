import { log } from '@kot-shrodingera-team/germes-utils';

const openEvent = async (): Promise<void> => {
  if (window.location.href === worker.EventUrl) {
    log('Уже открыто нужное событие', 'steelblue');
    return;
  }
  log(`${window.location.href} !== ${worker.EventUrl}`, 'white', true);
  log('Переходим на событие', 'orange');
  window.location.href = worker.EventUrl;
};

export default openEvent;
