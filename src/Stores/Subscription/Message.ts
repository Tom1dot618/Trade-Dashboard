import { makeAutoObservable } from "mobx";
import { ByBitStreamTopics } from "../../Exchanges/Bybit/Enums";

class Message {
  topic: string = "";
  pair: string = "";
  type: string = "";
  dataItems: Array<any> = [];

  constructor(event: any) {
    makeAutoObservable(this);

    const message = JSON.parse(event.data);

    this.topic = message.topic;
    this.pair = message.topic.split(".")[1];
    this.type = message.topic.split(".")[0];
    this.dataItems = message.data;
  }

  get isTrade() {
    return this.type === ByBitStreamTopics.Trade;
  }

  get isOrderbookLevel2() {
    return this.type === ByBitStreamTopics.OrderbookLevel2;
  }
}

export default Message;
