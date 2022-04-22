import { makeAutoObservable } from "mobx";
import Trade from "../Trade/Trade";
import Subscription from "./Subscription";

class Subscriptions {
  items: Subscription[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(pair: string, type: string) {
    this.items.push(new Subscription(pair, type));
  }

  addTradeItems(pair: string, dataItems: any[]) {
    const subscription = this.items.find((item) => item.pair === pair);

    if (subscription === undefined) {
      console.log(`Subscription not found for pair: ${pair}`);
    } else {
      dataItems.forEach((dataItem) => {
        subscription.trades.add(
          dataItem.side,
          dataItem.time,
          dataItem.size,
          dataItem.price
        );
      });
    }
  }

  getTradeItems(pair: string): Trade[] {
    const subscription = this.items.find((item) => item.pair === pair);

    if (subscription === undefined) {
      console.log(`Subscription not found for pair: ${pair}`);
      return [];
    } else {
      return subscription.trades.items;
    }
  }
}

export default Subscriptions;
