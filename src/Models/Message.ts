import ByBitStreamTopics from "../Enums/Bybit/BybitStreamTopics";

class Message {
  topic: string = "";
  pair: string = "";
  type: string = "";
  dataItems: Array<any> = [];

  constructor(event: any) {
    const message = JSON.parse(event.data);

    console.log(event);

    this.topic = message.topic;
    this.pair = message.topic.split(".")[1];
    this.type = message.topic.split(".")[0];
    this.dataItems = message.data;
  }

  get isTrade() {
    return this.type === ByBitStreamTopics.TRADE;
  }

  get isOrderbookLevel2() {
    return this.type === ByBitStreamTopics.ORDERBOOKLEVEL2;
  }
}

export default Message;
