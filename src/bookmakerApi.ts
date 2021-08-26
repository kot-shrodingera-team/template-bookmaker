declare global {
  // interface GermesData {}
  // interface Window {}
}

export const clearGermesData = (): void => {
  if (window.germesData && window.germesData.updateManualDataIntervalId) {
    clearInterval(window.germesData.updateManualDataIntervalId);
  }
  window.germesData = {
    bookmakerName: '',
    minimumStake: undefined,
    maximumStake: undefined,
    doStakeTime: undefined,
    betProcessingStep: undefined,
    betProcessingAdditionalInfo: undefined,
    betProcessingTimeout: 50000,
    stakeDisabled: undefined,
    stopBetProcessing: () => {
      window.germesData.betProcessingStep = 'error';
      window.germesData.stakeDisabled = true;
    },
    updateManualDataIntervalId: undefined,
    stopUpdateManualData: undefined,
    manualMaximumStake: undefined,
    manualCoefficient: undefined,
    manualParameter: undefined,
    manualStakeEnabled: undefined,
  };
};

export default {};
