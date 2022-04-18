import Trades from "./Trades";

class PairTrades {
  items: Trades[] = [];

  addPair(pair: string) {
    this.items.push(new Trades(pair));
  }

  addTrades(pair: string, dataItems: any[]) {
    this.items.forEach((item) => {
      if (item.pair === pair) {
        dataItems.forEach((dataItem) => {
          item.add(dataItem.side, dataItem.time, dataItem.size, dataItem.price);
        });
      }
    });
  }

  getTrades(pair: string): Trades {
    this.items.forEach((item) => {
      if (item.pair === pair) {
        return item;
      }
    });

    //TODO
    return new Trades("");
  }
}

export default PairTrades;
