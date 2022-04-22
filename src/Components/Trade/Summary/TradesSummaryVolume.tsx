import React from "react";
import { observer } from "mobx-react-lite";
import { Grid } from "@mui/material";
import Trades from "../../../Stores/Trade/Trades";
import TradeVolumeCounter from "./Base/TradeVolumeCounter";
import TradeSide from "../../../Enums/TradeSide";
import TradeCounterLabel from "./Base/TradeCounterLabel";
import viewStore from "../../../Stores/ViewStore";
import TradePrice from "./Base/TradePrice";

const TradesSummaryVolume = ({ trades }: { trades: Trades }) => {
  //--- text volume
  const text = <TradeCounterLabel xs={4} title={"volume"} paddingTop={"6px"} />;

  //--- last price
  const price = (
    <TradePrice
      xs={4}
      side={trades.lastSide}
      price={trades.lastPrice}
      change={trades.priceChange}
    />
  );

  return (
    <Grid container>
      <TradeVolumeCounter
        variant="big"
        xs={4}
        side={TradeSide.Buy}
        amount={trades.buyVolume}
      />

      {viewStore.showDescription ? text : price}

      <TradeVolumeCounter
        variant="big"
        xs={4}
        side={TradeSide.Sell}
        amount={trades.sellVolume}
      />
    </Grid>
  );
};

export default observer(TradesSummaryVolume);
