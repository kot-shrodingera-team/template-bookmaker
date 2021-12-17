import checkCouponLoadingGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/checkCouponLoading';
import {
  getWorkerParameter,
  getElement,
  getRemainingTimeout,
  sleep,
  log,
  awaiter,
  text,
  sendTGBotMessage,
} from '@kot-shrodingera-team/germes-utils';
import {
  sendErrorMessage,
  betProcessingError,
  betProcessingCompltete,
} from '@kot-shrodingera-team/germes-utils/betProcessing';
import { StateMachine } from '@kot-shrodingera-team/germes-utils/stateMachine';

const loaderSelector = '';
const errorSelector = '';
const betPlacedSelector = '';

const loaderNotAppearedTimeout = getWorkerParameter<number>(
  'betProcessingStartDelay',
  'number'
);
const noResultAfterLoaderDisappearedTimeout =
  getWorkerParameter<number>(
    'betProcessingLoaderDissapearMaxDelay',
    'number'
  ) || 3000;

const sendDevTGBotMessage = (message: string): void => {
  sendTGBotMessage(
    '1786981726:AAE35XkwJRsuReonfh1X2b8E7k9X4vknC_s',
    126302051,
    message
  );
};

const asyncCheck = async () => {
  const machine = new StateMachine();

  machine.promises = {
    loader: () => getElement(loaderSelector, getRemainingTimeout()),
    ...(loaderNotAppearedTimeout
      ? { loaderNotAppeared: sleep(loaderNotAppearedTimeout) }
      : {}),
    error: () => getElement(errorSelector, getRemainingTimeout()),
    betPlaced: () => getElement(betPlacedSelector, getRemainingTimeout()),
  };

  machine.setStates({
    start: {
      entry: async () => {
        log('Начало обработки ставки', 'steelblue');
      },
    },
    loaderNotAppeared: {
      entry: async () => {
        const message = `Индикатор или результат не появился в течении ${loaderNotAppearedTimeout} мс`;
        log(message, 'crimson');
        sendErrorMessage(message);
        betProcessingError(machine);
      },
    },
    loader: {
      entry: async () => {
        log('Появился индикатор', 'steelblue');
        window.germesData.betProcessingAdditionalInfo = 'индикатор';
        delete machine.promises.loader;
        delete machine.promises.loaderNotAppeared;
        machine.promises.loaderDissappeared = () =>
          awaiter(
            () => document.querySelector(loaderSelector) === null,
            getRemainingTimeout()
          );
      },
    },
    loaderDissappeared: {
      entry: async () => {
        log('Исчез индикатор', 'steelblue');
        window.germesData.betProcessingAdditionalInfo = undefined;
        delete machine.promises.loaderDissappeared;
        machine.promises.noResultAfterLoaderDisappeared = () =>
          sleep(noResultAfterLoaderDisappearedTimeout);
      },
    },
    noResultAfterLoaderDisappeared: {
      entry: async () => {
        log(
          `Результат не появился в течении ${noResultAfterLoaderDisappearedTimeout} мс после исчезания индикатора`,
          'steelblue'
        );
        window.germesData.betProcessingAdditionalInfo = null;
        const message = `Результат не появился в течении ${noResultAfterLoaderDisappearedTimeout} мс после исчезания индикатора`;
        log(message, 'crimson');
        sendErrorMessage(message);
        betProcessingError(machine);
      },
    },
    error: {
      entry: async () => {
        log('Появилась ошибка', 'steelblue');
        window.germesData.betProcessingAdditionalInfo = undefined;
        const errorText = text(<HTMLElement>machine.data.result);
        log(errorText, 'tomato');
        if (/Ошибка/i.test(errorText)) {
          //
        } else {
          sendErrorMessage(errorText);
          sendDevTGBotMessage(errorText);
        }
        betProcessingError(machine);
      },
    },
    betPlaced: {
      entry: async () => {
        window.germesData.betProcessingAdditionalInfo = undefined;
        betProcessingCompltete(machine);
      },
    },
    timeout: {
      entry: async () => {
        window.germesData.betProcessingAdditionalInfo = undefined;
        const message = 'Не дождались результата ставки';
        log(message, 'crimson');
        sendErrorMessage(message);
        betProcessingError(machine);
      },
    },
  });

  machine.start('start');
};

const checkCouponLoading = checkCouponLoadingGenerator({
  asyncCheck,
  disableLog: false,
});

export default checkCouponLoading;
