import { makeAutoObservable } from "mobx";

import { BybitRestEndPoint } from "../../Exchanges/Bybit/Enums";
import DataUtils from "../../Utils/DataUtils";
import Symbol from "./Symbol";

class Symbols {
  items: Symbol[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async initialize() {
    //--- fetch symbols from Bybit
    return new Promise((resolve) => {
      DataUtils.fetchData(BybitRestEndPoint.QuerySymbols).then((items: any) => {
        items.forEach((item: any) => {
          this.items.push(new Symbol(item));
        });
        resolve(true);
      });
    });
  }

  pair(name: string): any {
    return this.items.find((item: Symbol) => {
      return item.name === name;
    });
  }
}

export default Symbols;
