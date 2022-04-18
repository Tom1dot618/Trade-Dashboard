import Subscriptions from "../Models/Subscriptions";
import Subscription from "../Models/Subscription";
import Message from "../Models/Message";

//===================== WEBSERVICE ================================

class StreamService {
  constructor(
    endPointUrl: string,
    subscriptions: Subscriptions,
    onMessage: (message: any) => void
  ) {
    const DEBUG = false;
    const webSocket = new WebSocket(endPointUrl);

    //================== onOpen ======================
    webSocket.onopen = function (event) {
      if (DEBUG) console.log("WebSocket connection opened");

      //--- set heartbeat timer
      (function () {
        setInterval(
          (function fn() {
            if (DEBUG) console.log("\n<ping>");
            webSocket.send('{"op":"ping"}');
            return fn;
          })(),
          30000
        );
      })();

      //--- subscribe
      subscriptions.items.map((subscription: Subscription) =>
        webSocket.send(
          JSON.stringify({
            op: "subscribe",
            args: [subscription.topic + "." + subscription.pair],
          })
        )
      );
    };

    //================== onMessage ======================
    webSocket.onmessage = function (event: any) {
      onMessage(new Message(event));
    };
  }
}

export default StreamService;
