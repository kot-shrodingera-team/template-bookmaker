import '@kot-shrodingera-team/worker-declaration/workerCheck';
import { log } from '@kot-shrodingera-team/germes-utils';
import { clearGermesData } from './bookmakerApi';
import fastLoad from './fastLoad';
import initialize from './initialization';
import showStake from './show_stake';
import afterSuccesfulStake from './worker_callbacks/afterSuccesfulStake';
import checkCouponLoading from './worker_callbacks/checkCouponLoading';
import checkStakeStatus from './worker_callbacks/checkStakeStatus';
import doStake from './worker_callbacks/doStake';
import getStakeInfo from './worker_callbacks/getStakeInfo';
import setStakeSum from './worker_callbacks/setStakeSum';

window.alert = (message: string): void => {
  log(`Перехваченный алерт: ${message}`);
};

worker.SetCallBacks(
  log,
  getStakeInfo,
  setStakeSum,
  doStake,
  checkCouponLoading,
  checkStakeStatus,
  afterSuccesfulStake
);

worker.SetFastCallback(fastLoad);
clearGermesData();

(async (): Promise<void> => {
  if (
    worker.GetSessionData(`${window.germesData.bookmakerName}.ShowStake`) ===
      '1' &&
    worker.IsShowStake
  ) {
    log('Загрузка страницы с открытием купона', 'steelblue');
    showStake();
  } else if (!worker.IsShowStake) {
    worker.SetSessionData(`${window.germesData.bookmakerName}.ShowStake`, '0');
    worker.SetSessionData(
      `${window.germesData.bookmakerName}.TransitionToEventPage`,
      '0'
    );
    log('Загрузка страницы с авторизацией', 'steelblue');
    initialize();
  } else {
    log('Загрузка страницы без открытия купона', 'steelblue');
  }
})();
