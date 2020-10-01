import {
  balanceReadyGenerator,
  getBalanceGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getBalance';

export const balanceReady = balanceReadyGenerator({
  balanceSelector: '',
  balanceRegex: null,
});

const getBalance = getBalanceGenerator({
  balanceSelector: '',
  balanceRegex: null,
});

export const updateBalance = (): void => {
  worker.JSBalanceChange(getBalance());
};

export default getBalance;
