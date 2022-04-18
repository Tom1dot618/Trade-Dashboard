import Subscription from "./Subscription";

class Subscriptions {
  items: Array<Subscription> = [];

  add(pair: string, type: string) {
    this.items.push(new Subscription(pair, type));
  }
}

export default Subscriptions;
