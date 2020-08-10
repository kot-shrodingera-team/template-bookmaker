import checkAuthGenerator, {
  authCheckReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/checkAuth';

export const authCheckReady = authCheckReadyGenerator({
  authFormSelector: '',
  accountSelector: '',
});

const checkAuth = checkAuthGenerator({
  accountSelector: '',
});

export default checkAuth;
