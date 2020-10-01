import checkCouponLoadingGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/checkCouponLoading';
import { getDoStakeTime } from '../stake_info/doStakeTime';

const check = () => {
  return true;
};

const checkCouponLoading = checkCouponLoadingGenerator({
  getDoStakeTime,
  bookmakerName: '',
  timeout: 60000,
  check,
});

export default checkCouponLoading;
