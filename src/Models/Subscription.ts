class Subscription {
  pair: string = "";
  type: string = "";

  constructor(pair: string, type: string) {
    this.pair = pair;
    this.type = type;
  }

  get topic() {
    return `${this.type}.${this.pair}`;
  }
}

export default Subscription;
