import { log, awaiter } from '@kot-shrodingera-team/germes-utils';
import clearCoupon from './clearCoupon';
import getStakeCount from '../stake_info/getStakeCount';
import { updateBalance } from '../stake_info/getBalance';
import setBetAcceptMode from './setBetAcceptMode';

const showStake = async (): Promise<void> => {
  // Поиск ставки

  const couponCleared = await clearCoupon();
  if (!couponCleared) {
    log('Не удалось очистить купон', 'red');
    worker.JSFail();
    return;
  }
  updateBalance();

  // Открытие ставки

  const betAdded = await awaiter(() => getStakeCount() === 1);
  if (!betAdded) {
    log('Ставка не попала в купон', 'red');
    worker.JSFail();
    return;
  }
  log('Ставка успешно открыта', 'green');
  setBetAcceptMode();
  worker.JSStop();
};

export default showStake;
