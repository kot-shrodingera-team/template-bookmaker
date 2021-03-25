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
  repeatingOpenBet(openingAction, getStakeCount, 5, 1000, 50);
};

export default openBet;
