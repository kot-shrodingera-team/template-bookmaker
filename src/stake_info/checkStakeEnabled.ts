import { checkStakeEnabledGenerator } from '@kot-shrodingera-team/germes-generators/stake_info';

const checkStakeEnabled = checkStakeEnabledGenerator({
  betCheck: {
    selector: '',
    errorClasses: [
      {
        className: '',
        message: 'ставка заблокирована',
      },
    ],
  },
  errorsCheck: [
    {
      selector: '',
      message: 'ставка заблокирована',
    },
  ],
});

export default checkStakeEnabled;
