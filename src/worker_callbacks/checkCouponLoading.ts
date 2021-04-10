import checkCouponLoadingGenerator from '@kot-shrodingera-team/germes-generators/worker_callbacks/checkCouponLoading';
import {
  log,
  getElement,
  awaiter,
  getRemainingTimeout,
  checkCouponLoadingError,
  checkCouponLoadingSuccess,
} from '@kot-shrodingera-team/germes-utils';

const loaderSelector = '';
const errorSelector = '';
const errorTextSelector = '';
const betPlacedSelector = '';

const asyncCheck = async () => {
  window.germesData.betProcessingStep = 'waitingForLoaderOrResult';

  await Promise.race([
    getElement(loaderSelector, getRemainingTimeout()),
    getElement(errorSelector, getRemainingTimeout()),
    getElement(betPlacedSelector, getRemainingTimeout()),
  ]);

  const loaderElement = document.querySelector(loaderSelector);

  if (loaderElement) {
    log('Появился индикатор', 'steelblue');
    window.germesData.betProcessingAdditionalInfo = 'индикатор';
    awaiter(
      () => {
        return document.querySelector(loaderSelector) === null;
      },
      getRemainingTimeout(),
      100
    ).then((loaderDissappeared) => {
      if (loaderDissappeared) {
        log('Исчез индикатор', 'steelblue');
        window.germesData.betProcessingAdditionalInfo = null;
      }
    });

    window.germesData.betProcessingStep = 'waitingForResult';
    await Promise.race([
      getElement(errorSelector, getRemainingTimeout()),
      getElement(betPlacedSelector, getRemainingTimeout()),
    ]);
  }

  const errorElement = document.querySelector(errorSelector);
  const betPlacedElement = document.querySelector(betPlacedSelector);

  if (errorElement) {
    log('Ошибка принятия ставки', 'steelblue');
    const errorTextElement = errorElement.querySelector(errorTextSelector);
    if (!errorTextElement) {
      return checkCouponLoadingError({
        botMessage: 'Не найден текст ошибки',
        informMessage: 'Не найден текст ошибки',
      });
    }
    const errorText = errorTextElement.textContent.trim();
    log(errorText, 'tomato');
    return checkCouponLoadingError({});
  }
  if (betPlacedElement) {
    return checkCouponLoadingSuccess('Ставка принята');
  }

  return checkCouponLoadingError({
    botMessage: 'Не дождались результата ставки',
    informMessage: 'Не дождались результата ставки',
  });
};

const check = () => {
  const step = window.germesData.betProcessingStep;
  const additionalInfo = window.germesData.betProcessingAdditionalInfo
    ? ` (${window.germesData.betProcessingAdditionalInfo})`
    : '';
  switch (step) {
    case 'beforeStart':
      asyncCheck();
      return true;
    case 'error':
    case 'success':
    case 'reopened':
      log(`Обработка ставки завершена${additionalInfo}`, 'orange');
      log(step, 'orange', true);
      return false;
    default:
      log(`Обработка ставки${additionalInfo}`, 'tan');
      log(step, 'tan', true);
      return true;
  }
};

const checkCouponLoading = checkCouponLoadingGenerator({
  check,
});

export default checkCouponLoading;
