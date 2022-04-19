import { makeAutoObservable } from "mobx";
import Bybit from "../Enums/Bybit/Bybit";
import ByBitStreamTopics from "../Enums/Bybit/BybitStreamTopics";
import BybitTradingPair from "../Enums/Bybit/BybitTradingPairs";
import Message from "../Models/Message";
import Subscriptions from "../Models/Subscriptions";
import StreamService from "../Services/StreamService";
import PairTrades from "./Trade/PairTrades";

class Store {
  pairTrades: PairTrades = new PairTrades();
  subscriptions: Subscriptions = new Subscriptions();

  constructor() {
    makeAutoObservable(this);

    //--- BTCUSD
    this.subscriptions.add(BybitTradingPair.BTCUSD, ByBitStreamTopics.TRADE);
    this.pairTrades.addPair(BybitTradingPair.BTCUSD);

    //--- ETHUSD
    this.subscriptions.add(BybitTradingPair.ETHUSD, ByBitStreamTopics.TRADE);
    this.pairTrades.addPair(BybitTradingPair.ETHUSD);

    //--- LUNAUSD
    this.subscriptions.add(BybitTradingPair.LUNAUSD, ByBitStreamTopics.TRADE);
    this.pairTrades.addPair(BybitTradingPair.LUNAUSD);

    new StreamService(
      Bybit.PRODUCTIONSTREAMURL,
      this.subscriptions,
      this.onMessage
    );
  }

  get windwowInnerHeight(): number {
    return window.innerHeight;
  }

  get windowInnerHeight(): number {
    return window.innerHeight;
  }

  get maxNumberOfMessagesPerColumn(): number {
    return Math.floor((this.windwowInnerHeight - 350) / 20);
  }

  onMessage = (message: Message) => {
    //--- trade message
    if (message.isTrade) {
      this.pairTrades.addTrades(message.pair, message.dataItems);
    }
    //--- level 2 orderbook message
    else if (message.isOrderbookLevel2) {
      //TODO
    }
  };
}

const store = new Store();

export default store;
