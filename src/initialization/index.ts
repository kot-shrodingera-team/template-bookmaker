import initializeGenerator from '@kot-shrodingera-team/germes-generators/initialization/initialize';
import checkAuth, { authStateReady } from '../stake_info/checkAuth';
import { balanceReady, updateBalance } from '../stake_info/getBalance';
import afterSuccesfulLogin from './afterSuccesfulLogin';
import authorize from './authorize';

const initialize = initializeGenerator({
  authStateReady,
  authStateReadyTimeout: 5000,
  checkAuth,
  balanceReady,
  updateBalance,
  authorize,
  afterSuccesfulLogin,
});

export default initialize;
