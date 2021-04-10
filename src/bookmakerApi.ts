declare global {
  // interface GermesData {}
}

export const clearGermesData = (): void => {
  window.germesData = {
    bookmakerName: '',
    betProcessingStep: undefined,
    betProcessingAdditionalInfo: undefined,
    doStakeTime: undefined,
    betProcessingTimeout: 50000,
  };
};

export default {};
