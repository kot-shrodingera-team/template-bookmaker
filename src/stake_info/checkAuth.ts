import checkAuthGenerator, {
  authStateReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/checkAuth';

export const authStateReady = authStateReadyGenerator({
  noAuthElementSelector: '',
  authElementSelector: '',
  maxDelayAfterNoAuthElementAppeared: 0,
  logging: false,
});

const checkAuth = checkAuthGenerator({
  authElementSelector: '',
});

export default checkAuth;
