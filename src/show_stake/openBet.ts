import {
  getElement,
  log,
  repeatingOpenBet,
} from '@kot-shrodingera-team/germes-utils';
import { JsFailError } from '@kot-shrodingera-team/germes-utils/errors';
import getStakeCount from '../stake_info/getStakeCount';

const openBet = async (): Promise<void> => {
  // Получение данных из меты
  const { selection_id: betId } = JSON.parse(worker.BetId);

  // Формирование данных для поиска
  const betSelector = `[id*="${betId}"]`;
  log(`betSelector = [id*="${betId}"]`, 'white', true);

  // Поиск ставки
  const bet = await getElement<HTMLElement>(betSelector);
  if (!bet) {
    throw new JsFailError('Ставка не найдена');
  }

  // Открытие ставки, проверка, что ставка попала в купон
  const openingAction = async () => {
    bet.click();
  };
  await repeatingOpenBet(openingAction, getStakeCount, 5, 1000, 50);

  const eventNameSelector = '';
  const marketNameSelector = '';
  const betNameSelector = '';

  const eventNameElement = document.querySelector(eventNameSelector);
  if (!eventNameElement) {
    throw new JsFailError('Не найдено событие открытой ставки');
  }
  const marketNameElement = document.querySelector(marketNameSelector);
  if (!marketNameElement) {
    throw new JsFailError('Не найден маркет открытой ставки');
  }
  const betNameElement = document.querySelector(betNameSelector);
  if (!betNameElement) {
    throw new JsFailError('Не найдена роспись открытой ставки');
  }

  const eventName = eventNameElement.textContent.trim();
  const marketName = marketNameElement.textContent.trim();
  const betName = betNameElement.textContent.trim();
  log(`Открыта ставка\n${eventName}\n${marketName}\n${betName}`, 'steelblue');
};

export default openBet;
