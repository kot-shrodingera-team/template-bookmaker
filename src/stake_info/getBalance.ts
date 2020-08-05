import {
  balanceReadyGenerator,
  getBalanceGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info';

export const balanceReady = balanceReadyGenerator({
  balanceSelector: '',
  balanceRegex: /^(\d+(?:\.\d+)?)$/i,
});

const getBalance = getBalanceGenerator({
  balanceSelector: '',
  balanceRegex: /^(\d+(?:\.\d+)?)$/i,
});

export const updateBalance = (): void => {
  worker.JSBalanceChange(getBalance());
};

export default getBalance;
