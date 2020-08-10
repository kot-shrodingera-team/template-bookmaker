import authorizeGenerator from '@kot-shrodingera-team/germes-generators/initialization/authorize';
import { updateBalance, balanceReady } from '../stake_info/getBalance';
import afterSuccesfulLogin from './afterSuccesfulLogin';

const changeToPhoneLogin = async (): Promise<boolean> => {
  return true;
};

const authorize = authorizeGenerator({
  openForm: {
    selector: '',
    openedSelector: '',
    afterOpenDelay: 1000,
  },
  phoneLogin: {
    changeToPhoneLogin,
    phoneInputSelector: '',
  },
  loginInputSelector: '',
  passwordInputSelector: '',
  submitButtonSelector: '',
  inputType: 'fireEvent',
  beforeSubmitDelay: 0,
  captchaSelector: '',
  loginedWait: {
    loginedSelector: '',
    balanceReady,
    updateBalance,
  },
  afterSuccesfulLogin,
});

export default authorize;
