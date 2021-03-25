import doStakeGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/doStake';
import getCoefficient from '../stake_info/getCoefficient';
import { clearDoStakeTime } from '../stake_info/doStakeTime';

const preCheck = (): boolean => {
  return true;
};

const postCheck = (): boolean => {
  return true;
};

const doStake = doStakeGenerator({
  preCheck,
  doStakeButtonSelector: '',
  errorClasses: [
    {
      className: '',
      message: '',
    },
  ],
  disabledCheck: false,
  getCoefficient,
  postCheck,
  clearDoStakeTime,
  context: () => document,
});

export default doStake;
