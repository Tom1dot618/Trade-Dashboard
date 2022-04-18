import { makeAutoObservable } from "mobx";
import TradeSide from "../../Enums/TradeSide";
import Trade from "./Trade";

class Trades {
  pair: string = "";
  items: Trade[] = [];
  buyItems: Trade[] = [];
  sellItems: Trade[] = [];

  constructor(pair: string) {
    makeAutoObservable(this);

    this.pair = pair;
  }

  get count(): number {
    return this.buyItems.length + this.sellItems.length;
  }

  get sellCount(): number {
    return this.sellItems.length;
  }

  get sellVolume(): number {
    return this.sellItems.reduce((sum, item) => sum + item.size, 0);
  }

  get sellAverageVolume(): number {
    return this.sellVolume / this.sellCount;
  }

  get buyCount(): number {
    return this.buyItems.length;
  }

  get buyVolume(): number {
    return this.buyItems.reduce((sum, item) => sum + item.size, 0);
  }

  get buyAverageVolume(): number {
    return this.buyVolume / this.buyCount;
  }

  add(side: string, time: string, size: number, price: number): Trade {
    const trade: Trade = new Trade(side, time, size, price);
    this.items.push(trade);

    if (side === TradeSide.BUY) {
      this.buyItems.push(new Trade(TradeSide.BUY, time, size, price));
    } else if (side === TradeSide.SELL) {
      this.sellItems.push(new Trade(TradeSide.SELL, time, size, price));
    }

    return trade;
  }
}

export default Trades;
