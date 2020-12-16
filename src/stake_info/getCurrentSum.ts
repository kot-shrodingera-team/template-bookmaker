import getCurrentSumGenerator from '@kot-shrodingera-team/germes-generators/stake_info/getCurrentSum';

const getCurrentSum = getCurrentSumGenerator({
  sumInput: '',
  zeroValues: [],
  currentSumRegex: /(\d+(?:\.\d+)?)/,
});

export default getCurrentSum;
