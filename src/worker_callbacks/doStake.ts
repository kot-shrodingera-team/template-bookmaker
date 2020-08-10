import doStakeGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/doStake';
import getCoefficient from '../stake_info/getCoefficient';
import { clearDoStakeTime } from '../stake_info/doStakeTime';

const preCheck = (): boolean => {
  return true;
};

const postCheck = (): void => {};
const doStake = doStakeGenerator({
  preCheck,
  doStakeButtonSelector: '',
  getCoefficient,
  errorClasses: [
    {
      className: '',
      message: '',
    },
  ],
  clearDoStakeTime,
  postCheck,
});

export default doStake;
