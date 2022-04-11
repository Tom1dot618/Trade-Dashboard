import { makeAutoObservable } from "mobx";
import Trade from "./Trade";

class Trades {
  items: Array<Trade> = [];
  buyItems: Array<Trade> = [];
  sellItems: Array<Trade> = [];

  constructor() {
    makeAutoObservable(this);
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

  add(side: string, time: string, size: number, price: number) {
    this.items.push(new Trade(side, time, size, price));

    if (side === "Buy") {
      this.buyItems.push(new Trade("Buy", time, size, price));
    } else if (side === "Sell") {
      this.sellItems.push(new Trade("Sell", time, size, price));
    }
  }
}

export default Trades;
