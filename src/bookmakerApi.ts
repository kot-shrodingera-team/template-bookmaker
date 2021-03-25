declare global {
  interface Window {
    germesData: {
      doStakeTime: Date;
      betProcessingStep: string;
      betProcessingAdditionalInfo: string;
    };
  }
}

export default {};
