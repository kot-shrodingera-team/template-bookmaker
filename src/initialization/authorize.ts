import authorizeGenerator from '@kot-shrodingera-team/germes-generators/initialization/authorize';
// import {
//   getElement,
//   log,
//   resolveRecaptcha,
// } from '@kot-shrodingera-team/germes-utils';
import { authElementSelector } from '../stake_info/checkAuth';
import { updateBalance, balanceReady } from '../stake_info/getBalance';
import afterSuccesfulLogin from './afterSuccesfulLogin';

const preInputCheck = async (): Promise<boolean> => {
  return true;
};

const beforeSubmitCheck = async (): Promise<boolean> => {
  // const recaptchaIFrame = await getElement('iframe[title="reCAPTCHA"]', 1000);
  // if (recaptchaIFrame) {
  //   log('Есть капча. Пытаемся решить', 'orange');
  //   try {
  //     await resolveRecaptcha();
  //   } catch (e) {
  //     if (e instanceof Error) {
  //       log(e.message, 'red');
  //     }
  //     return false;
  //   }
  // } else {
  //   log('Нет капчи', 'steelblue');
  // }
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
  preInputCheck,
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
