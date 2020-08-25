import getMaximumStakeGenerator, {
  maximumStakeReadyGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getMaximumStake';

export const maximumStakeReady = maximumStakeReadyGenerator({
  maximumStakeElementSelector: '',
});

const getMaximumStake = getMaximumStakeGenerator({
  maximumStakeElementSelector: '',
});

export default getMaximumStake;
