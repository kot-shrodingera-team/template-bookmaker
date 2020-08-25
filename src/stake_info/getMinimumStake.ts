import getMinimumStakeGenerator, {
  minimumStakeReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getMinimumStake';

export const minimumStakeReady = minimumStakeReadyGenerator({
  minimumStakeElementSelector: '',
});

const getMinimumStake = getMinimumStakeGenerator({
  minimumStakeElementSelector: '',
});

export default getMinimumStake;
