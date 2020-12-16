import {
  balanceReadyGenerator,
  getBalanceGenerator,
} from '@kot-shrodingera-team/germes-generators/stake_info/getBalance';

export const balanceReady = balanceReadyGenerator({
  balanceSelector: '',
  balanceRegex: /(\d+(?:\.\d+)?)/,
  replaceDataArray: [
    {
      searchValue: '',
      replaceValue: '',
    },
  ],
  removeRegex: /[\s,']/g,
});

const getBalance = getBalanceGenerator({
  balanceSelector: '',
  balanceRegex: /(\d+(?:\.\d+)?)/,
  replaceDataArray: [
    {
      searchValue: '',
      replaceValue: '',
    },
  ],
  removeRegex: /[\s,']/g,
});

export const updateBalance = (): void => {
  worker.JSBalanceChange(getBalance());
};

export default getBalance;
