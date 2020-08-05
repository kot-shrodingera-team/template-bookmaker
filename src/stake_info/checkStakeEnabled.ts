import { checkStakeEnabledGenerator } from '@kot-shrodingera-team/germes-generators/stake_info';

const checkStakeEnabled = checkStakeEnabledGenerator({
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
