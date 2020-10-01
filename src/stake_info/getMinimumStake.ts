import getMinimumStakeGenerator, {
  minimumStakeReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getMinimumStake';

export const minimumStakeReady = minimumStakeReadyGenerator({
  minimumStakeElementSelector: '',
  minimumStakeRegex: null,
});

const getMinimumStake = getMinimumStakeGenerator({
  minimumStakeElementSelector: '',
  minimumStakeRegex: null,
});

export default getMinimumStake;
