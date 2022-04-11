import { makeAutoObservable } from "mobx";
import BybitStream from "../Services/BybitStream";
import Trades from "./Trades";

class Store {
  trades: Trades = new Trades();
  stream: BybitStream;

  constructor() {
    const PAIR = "BTCUSD";
    //const ORDERBOOK_2_25 = "orderBookL2_25";
    const TRADE = "trade";

    let subscriptions = [];
    subscriptions.push(TRADE, PAIR);
    //subscriptions.push(ORDERBOOK_2_25);

    //--- init websockets
    this.stream = new BybitStream(subscriptions, this);

    makeAutoObservable(this);
  }
}

export default new Store();
