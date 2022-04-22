import { makeAutoObservable } from "mobx";

class ViewStore {
  showDescription: boolean = false;
  showIcons: boolean = false;
  showTrades: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  //--  Mouse event handlers to toggle the description and icons
  onMouseInside(value: boolean) {
    this.showDescription = value;
    this.showIcons = value;
  }

  //--- Windows sizing
  get windwowInnerHeight(): number {
    return window.innerHeight;
  }

  get windowInnerHeight(): number {
    return window.innerHeight;
  }

  get maxNumberOfMessagesPerColumn(): number {
    return Math.floor((this.windwowInnerHeight - 500) / 20);
  }
}

const viewStore = new ViewStore();

export default viewStore;
