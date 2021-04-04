import { log } from '@kot-shrodingera-team/germes-utils';

const getParameter = (): number => {
  const marketNameSelector = '';
  const betNameSelector = '';

  const marketNameElement = document.querySelector(marketNameSelector);
  if (!marketNameElement) {
    log('Не найден маркет ставки', 'crimson');
    return -9999;
  }
  const betNameElement = document.querySelector(betNameSelector);
  if (!betNameElement) {
    log('Не найдена роспись ставки', 'crimson');
    return -9999;
  }

  const marketName = marketNameElement.textContent.trim();
  const betName = betNameElement.textContent.trim();

  if (marketName === 'Draw No Bet') {
    return 0;
  }

  const parameterRegex = /([+-]?\d+(?:\.\d+)?)/;
  const parameterMatch = betName.match(parameterRegex);
  if (parameterMatch) {
    return Number(parameterMatch[1]);
  }
  return -6666;
};

export default getParameter;
