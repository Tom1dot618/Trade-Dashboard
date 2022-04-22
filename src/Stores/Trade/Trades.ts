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
  get lastPrice(): number {
    if (this.count > 0) {
      return this.items[this.count - 1].price;
    } else {
      return 0;
    }
  }

  get previousLastPrice(): number {
    if (this.count > 1) {
      return this.items[this.count - 2].price;
    } else {
      return 0;
    }
  }

  get priceChange(): number {
    return this.lastPrice - this.previousLastPrice;
  }

  get priceDirecttion(): TradeSide {
    if (this.lastPrice > this.previousLastPrice) {
      return TradeSide.Buy;
    } else if (this.lastPrice < this.previousLastPrice) {
      return TradeSide.Sell;
    }
    return TradeSide.Buy;
  }

  get lastSide(): TradeSide {
    if (this.count > 0) {
      return this.items[this.count - 1].side === "Buy"
        ? TradeSide.Buy
        : TradeSide.Sell;
    } else {
      return TradeSide.Buy;
    }
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

    if (side === TradeSide.Buy) {
      this.buyItems.push(new Trade(TradeSide.Buy, time, size, price));
    } else if (side === TradeSide.Sell) {
      this.sellItems.push(new Trade(TradeSide.Sell, time, size, price));
    }

    return trade;
  }
}

export default Trades;
