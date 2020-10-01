import getMaximumStakeGenerator, {
  maximumStakeReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getMaximumStake';

export const maximumStakeReady = maximumStakeReadyGenerator({
  maximumStakeElementSelector: '',
  maximumStakeRegex: null,
});

const getMaximumStake = getMaximumStakeGenerator({
  maximumStakeElementSelector: '',
  maximumStakeRegex: null,
});

export default getMaximumStake;
