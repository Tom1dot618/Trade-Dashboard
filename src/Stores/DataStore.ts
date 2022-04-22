import { makeAutoObservable } from "mobx";
import { BybitEndPointUrl, ByBitStreamTopics } from "../Exchanges/Bybit/Enums";
import Message from "./Subscription/Message";

import StreamService from "../Services/StreamService";
import Subscriptions from "./Subscription/Subscriptions";
import Symbols from "./Symbol/Symbols";

class DataStore {
  subscriptions: Subscriptions = new Subscriptions();
  symbols: Symbols = new Symbols();

  constructor() {
    makeAutoObservable(this);

    this.Initialize();
  }

  Initialize() {
    this.symbols.initialize().then(() => {
      //--- subscribe to trade pairs
      this.subscriptions.add(
        dataStore.symbols.pair("BTCUSD").name,
        ByBitStreamTopics.Trade
      );
      this.subscriptions.add(
        dataStore.symbols.pair("ETHUSD").name,
        ByBitStreamTopics.Trade
      );

      new StreamService(
        BybitEndPointUrl.MainnetStreamInversePerpetual,
        this.subscriptions,
        this.onMessage
      );
    });
  }

  onMessage = (message: Message) => {
    //--- trade message
    if (message.isTrade) {
      this.subscriptions.addTradeItems(message.pair, message.dataItems);
    }
    //--- level 2 orderbook message
    else if (message.isOrderbookLevel2) {
      //TODO
    }
  };
}

const dataStore = new DataStore();

export default dataStore;
