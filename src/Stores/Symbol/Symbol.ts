import { makeAutoObservable } from "mobx";
import LeverageFilter from "./LeverageFilter";
import LotSizeFilter from "./LotSizeFilter";
import PriceFilter from "./PriceFilter";

class Symbol {
  name: string;
  alias: string;
  status: string;
  baseCurrency: string;
  quoteCurrency: string;
  priceScale: number;
  takerFee: string;
  makerFee: string;
  fundingInterval: number;
  leverageFilter: LeverageFilter;
  priceFilter: PriceFilter;
  lotSizeFilter: LotSizeFilter;

  constructor(data: any) {
    makeAutoObservable(this);

    this.name = data.name;
    this.alias = data.alias;
    this.status = data.status;
    this.baseCurrency = data.base_currency;
    this.quoteCurrency = data.quote_currency;
    this.priceScale = data.price_scale;
    this.takerFee = data.taker_fee;
    this.makerFee = data.maker_fee;
    this.fundingInterval = data.funding_interval;
    this.leverageFilter = new LeverageFilter(data.leverage_filter);
    this.priceFilter = new PriceFilter(data.price_filter);
    this.lotSizeFilter = new LotSizeFilter(data.lot_size_filter);
  }
}

export default Symbol;
