//===================== CONSTANTS ================================
//--- logging
const DEBUG = true;
const DEBUG_VERBOSE = true;
//--- historical trade data
//--- webservice
const ENDPOINT = "wss://stream.bybit.com/realtime";
const PAIR = "BTCUSD";
const ORDERBOOK_2_25 = "orderBookL2_25";
const TRADE = "trade";

//===================== WEBSERVICE ================================

class BybitStream {
  constructor(subscriptions, store) {
    this.store = store;
    this.orderbookCountDelete = 0;
    this.orderbookCountInsert = 0;
    this.orderbookCountUpdate = 0;
    this.tradeCountBuy = 0;
    this.tradeCountSell = 0;
    this.tradeVolumeSell = 0;
    this.tradeVolumeBuy = 0;
    this.subscriptions = subscriptions;
    this.websocket = this._connect();
    this._attachEvents(
      this.websocket,
      this.subscriptions,
      this._processTradeData,
      this._processOrderbookData,
      this
    );
    this.isFirst = true;

    console.log(subscriptions);
  }
  //--- SOCKET INITIALIZATION
  _connect() {
    //--- log
    if (DEBUG) console.log("Attempting to connect to WebSocket ", ENDPOINT);

    //--- create socket
    return new WebSocket(ENDPOINT);
  }
  _attachEvents(
    websocket,
    subscriptions,
    tradeDataProcessor,
    orderbookDataProcessor,
    _this
  ) {
    //--- open event
    websocket.onopen = function (event) {
      //--- logging
      if (DEBUG) {
        console.log("WebSocket Client Connected");
        console.log(event);
      }

      //--- set heartbeat timer
      (function () {
        setInterval(
          (function fn() {
            if (DEBUG) {
              console.log("\n<ping>");
            }
            websocket.send('{"op":"ping"}');
            return fn;
          })(),
          30000
        );
      })();

      //--- subscribe
      console.log(subscriptions);
      subscriptions.forEach((subscription) => {
        //--- log
        if (DEBUG) console.log("Subscribe to ", subscription);

        //--- subscribe
        websocket.send(
          JSON.stringify({
            op: "subscribe",
            args: [subscription + "." + PAIR],
          })
        );
      });
    };

    //--- subscription events
    websocket.onmessage = function (event) {
      //--- log
      if (DEBUG) console.log(event);

      const message = JSON.parse(event.data);
      const topic = message.topic;
      const data = message.data;

      //--- log
      if (DEBUG) {
        //--- TOPIC
        if (topic != undefined) {
          console.log(topic.toUpperCase());
          //--- DATA
          if (data != undefined) {
            console.log(data);
          }
          //---- NO DATA
          else {
            console.log("No items available in websocket message!");
            return;
          }
        }
        //--- NO TOPIC <PONG>
        else {
          const returnMessage = message.ret_msg;
          if (returnMessage != undefined) {
            console.log(`\n<${returnMessage}>`);
            return;
          }
        }
      }

      //--- error checkking
      if (topic === undefined || data === undefined) {
        return;
      }

      //--- TRADE DATA
      if (
        topic.toUpperCase() === `${TRADE.toUpperCase()}.${PAIR.toUpperCase()}`
      ) {
        tradeDataProcessor(_this, data);
      }

      //--- ORDERBOOK DATA
      if (
        topic.toUpperCase() ===
        `${ORDERBOOK_2_25.toUpperCase()}.${PAIR.toUpperCase()}`
      ) {
        orderbookDataProcessor(_this, data);
      }
    };
  }
  _sendHeartbeat(websocket) {
    console.log(websocket);
    websocket.send('{"op":"ping"}');
    console.log("PING");
  }

  //--- ITEM PROCESSORS
  _tradeDataItemProcessor(_this, item) {
    //--- log
    if (DEBUG_VERBOSE) {
      console.log(
        `trade ${item.trade_id}:] ${item.side}  ${item.price}  ${item.size}`
      );

      _this.store.trades.add(item.side, item.timestamp, item.size, item.price);
    }
  }
  _orderbookDeleteItemProcessor(_this, item) {
    const message = `delete  ${item.side}  ${item.price}`;

    if (DEBUG_VERBOSE) console.log(`order ${item.id} ${message}`);
  }
  _orderbookUpdateItemProcessor(_this, item) {
    const message = `update  ${item.side}  ${item.price}  ${item.size}`;

    if (DEBUG_VERBOSE) console.log(`order ${item.id} ${message}`);
  }
  _orderbookInsertItemProcessor(_this, item) {
    const message = `insert  ${item.side}  ${item.price}  ${item.size}`;

    if (DEBUG_VERBOSE) console.log(`order ${item.id} ${message}`);
  }
  //--- LIST PROCESSORS
  _processTradeData(_this, items) {
    /*  if (_this.isFirst) {
      _this.df = new dfd.DataFrame(items);
      _this.isFirst = false;
    } else {
      let itemDf = new dfd.DataFrame(items);
      _this.df = dfd.concat({
        dfList: [_this.df, itemDf],
      });

      let tempDf = _this.df
        .loc({ rows: [":"], columns: ["side", "size", "price"] })
        .groupby(["side"]);

      tempDf.count().print();
      tempDf.sum().print();
    } */

    _this._processItems(_this, items, _this._tradeDataItemProcessor);
  }
  _processOrderbookData(_this, item) {
    _this._processItems(
      _this,
      item.delete,
      _this._orderbookDeleteItemProcessor
    );
    _this._processItems(
      _this,
      item.insert,
      _this._orderbookInsertItemProcessor
    );
    _this._processItems(
      _this,
      item.update,
      _this._orderbookUpdateItemProcessor
    );
  }
  //--- UTILITY FUNCTIONS
  _processItems(_this, items, itemProcessor) {
    if (items === undefined) return;

    items.forEach((item) => {
      itemProcessor(_this, item);
    });
  }
}

export default BybitStream;
