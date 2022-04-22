import { makeAutoObservable } from "mobx";

class LeverageFilter {
  minLeverage: number = 0;
  maxLeverage: number = 0;
  leverageStep: string = "";

  constructor(data: any) {
    makeAutoObservable(this);

    this.minLeverage = data.min_leverage;
    this.maxLeverage = data.max_leverage;
    this.leverageStep = data.leverage_step;
  }
}

export default LeverageFilter;
