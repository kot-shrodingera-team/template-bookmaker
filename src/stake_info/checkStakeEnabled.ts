import checkStakeEnabledGenerator from '@kot-shrodingera-team/germes-generators/stake_info/checkStakeEnabled';
import getStakeCount from './getStakeCount';

const preCheck = (): boolean => {
  return true;
};

const checkStakeEnabled = checkStakeEnabledGenerator({
  getStakeCount,
  preCheck,
  betCheck: {
    selector: '',
    errorClasses: [
      {
        className: '',
        message: '',
      },
    ],
  },
  errorsCheck: [
    {
      selector: '',
      message: '',
    },
  ],
});

export default checkStakeEnabled;
