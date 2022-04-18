import { makeAutoObservable } from "mobx";

class Trade {
  side: string = "";
  time: string = "";
  size: number = 0;
  price: number = 0;

  constructor(side: string, time: string, size: number, price: number) {
    makeAutoObservable(this);

    this.side = side;
    this.time = time;
    this.size = size;
    this.price = price;
  }
}

export default Trade;
