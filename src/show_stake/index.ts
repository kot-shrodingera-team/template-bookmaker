import { log, awaiter } from '@kot-shrodingera-team/germes-utils';
import clearCoupon from './clearCoupon';
import getStakeCount from '../stake_info/getStakeCount';
import { updateBalance } from '../stake_info/getBalance';
import setBetAcceptMode from './setBetAcceptMode';

let couponOpenning = false;

export const isCouponOpenning = (): boolean => couponOpenning;

const jsFail = (message = ''): void => {
  if (message) {
    log(message, 'red');
  }
  couponOpenning = false;
  worker.JSFail();
};

const showStake = async (): Promise<void> => {
  // Поиск ставки

  const couponCleared = await clearCoupon();
  if (!couponCleared) {
    jsFail('Не удалось очистить купон');
    return;
  }
  updateBalance();

  // Открытие ставки

  const betAdded = await awaiter(() => getStakeCount() === 1);
  if (!betAdded) {
    jsFail('Ставка не попала в купон');
    return;
  }
  log('Ставка успешно открыта', 'green');
  setBetAcceptMode();
  couponOpenning = false;
  worker.JSStop();
};

export default showStake;
