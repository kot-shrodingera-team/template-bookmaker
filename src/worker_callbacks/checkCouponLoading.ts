import { checkCouponLoadingGenerator } from '@kot-shrodingera-team/germes-generators/worker_callbacks';
import { getDoStakeTime } from '../stake_info/doStakeTime';

const check = () => {
  return true;
};

const checkCouponLoading = checkCouponLoadingGenerator({
  bookmakerName: '',
  getDoStakeTime,
  check,
});

export default checkCouponLoading;
