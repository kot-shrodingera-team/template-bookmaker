import { authorizeGenerator } from '@kot-shrodingera-team/germes-generators/initialization';
import { updateBalance } from '../stake_info/getBalance';

const authorize = authorizeGenerator({
  openForm: {
    selector: '',
    openedSelector: '',
    afterOpenDelay: 1000,
  },
  loginInputSelector: '',
  passwordInputSelector: '',
  submitButtonSelector: '',
  loginedWait: {
    loginedSelector: '',
    updateBalance,
  },
});

export default authorize;
