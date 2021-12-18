import getStakeInfoGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/getStakeInfo';
import showStake from '../show_stake';
import checkAuth from '../stake_info/checkAuth';
import checkStakeEnabled from '../stake_info/checkStakeEnabled';
import getBalance from '../stake_info/getBalance';
import getCoefficient from '../stake_info/getCoefficient';
import getCurrentSum from '../stake_info/getCurrentSum';
import getMaximumStake from '../stake_info/getMaximumStake';
import getMinimumStake from '../stake_info/getMinimumStake';
import getParameter from '../stake_info/getParameter';
import getStakeCount from '../stake_info/getStakeCount';

const isReShowStakeNeeded = () => {
  return false;
};

const preAction = (): void => {};

const getStakeInfo = getStakeInfoGenerator({
  reShowStake: {
    isNeeded: isReShowStakeNeeded,
    showStake,
  },
  preAction,
  checkAuth,
  getStakeCount,
  getBalance,
  getMinimumStake,
  getMaximumStake,
  getCurrentSum,
  checkStakeEnabled,
  getCoefficient,
  getParameter,
});

export default getStakeInfo;
