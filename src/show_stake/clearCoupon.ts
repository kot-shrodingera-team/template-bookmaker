import { clearCouponGenerator } from '@kot-shrodingera-team/germes-generators/show_stake';
import getStakeCount from '../stake_info/getStakeCount';

const clearCoupon = clearCouponGenerator({
  clearMode: 'all-only',
  clearAllSelector: '',
  clearSingleSelector: '',
  getStakeCount,
});

export default clearCoupon;
