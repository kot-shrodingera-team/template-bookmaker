import authorizeGenerator from '@kot-shrodingera-team/germes-generators/initialization/authorize';
import { authElementSelector } from '../stake_info/checkAuth';
import { updateBalance, balanceReady } from '../stake_info/getBalance';
import afterSuccesfulLogin from './afterSuccesfulLogin';

const setLoginType = async (): Promise<boolean> => {
  return true;
};

const beforeSubmitCheck = async (): Promise<boolean> => {
  return true;
};

const authorize = authorizeGenerator({
  openForm: {
    selector: '',
    openedSelector: '',
    loopCount: 10,
    triesInterval: 1000,
    afterOpenDelay: 0,
  },
  setLoginType,
  loginInputSelector: '',
  passwordInputSelector: '',
  submitButtonSelector: '',
  inputType: 'fireEvent',
  fireEventNames: ['input'],
  beforeSubmitDelay: 0,
  beforeSubmitCheck,
  captchaSelector: '',
  loginedWait: {
    loginedSelector: authElementSelector,
    timeout: 5000,
    balanceReady,
    updateBalance,
    afterSuccesfulLogin,
  },
  context: () => document,
});

export default authorize;
