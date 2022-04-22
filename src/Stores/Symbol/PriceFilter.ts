import { makeAutoObservable } from "mobx";

class PriceFilter {
  minPrice: string = "";
  maxPrice: string = "";
  tickSize: string = "";

  constructor(data: any) {
    makeAutoObservable(this);

    this.minPrice = data.min_price;
    this.maxPrice = data.max_price;
    this.tickSize = data.tick_size;
  }
}

export default PriceFilter;
