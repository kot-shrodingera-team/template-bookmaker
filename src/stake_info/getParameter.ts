import { log } from '@kot-shrodingera-team/germes-utils';

const getParameter = (): number => {
  const betNameSelector = '';
  const marketNameSelector = '';

  const betNameElement = document.querySelector(betNameSelector);
  if (!betNameElement) {
    log('Не найдена роспись ставки', 'crimson');
    return -6666;
  }
  const marketNameElement = document.querySelector(marketNameSelector);
  if (!marketNameElement) {
    log('Не найден маркет ставки', 'crimson');
    return -9999;
  }
  const betName = betNameElement.textContent.trim();
  const marketName = marketNameElement.textContent.trim();
  const parameterRegex = /([+-]?\d+(?:\.\d+)?)/;
  const parameterMatch = betName.match(parameterRegex);
  if (parameterMatch) {
    return Number(parameterMatch[1]);
  }
  return -6666;
};

export default getParameter;
