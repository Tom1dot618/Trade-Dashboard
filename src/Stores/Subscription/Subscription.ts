import { makeAutoObservable } from "mobx";
import Trades from "../Trade/Trades";

class Subscription {
  pair: string = "";
  type: string = "";
  trades: Trades;

  constructor(pair: string, type: string) {
    makeAutoObservable(this);

    this.pair = pair;
    this.type = type;
    this.trades = new Trades(pair);
  }

  get topic() {
    return `${this.type}.${this.pair}`;
  }
}

export default Subscription;
