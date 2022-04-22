import { makeAutoObservable } from "mobx";

class LotSizeFilter {
  maxTradingQty: number = 0;
  minTradingQty: number = 0;
  qtyStep: number = 0;

  constructor(data: any) {
    makeAutoObservable(this);

    this.maxTradingQty = data.max_trading_qty;
    this.minTradingQty = data.min_trading_qty;
    this.qtyStep = data.qty_step;
  }
}

export default LotSizeFilter;
