import React from "react";
import { observer } from "mobx-react-lite";
import { Grid } from "@mui/material";
import Trades from "../../../Stores/Trade/Trades";
import TradeCounterLabel from "./Base/TradeCounterLabel";
import TradeSide from "../../../Enums/TradeSide";
import TradeVolumeCounter from "./Base/TradeVolumeCounter";

const TradesSummaryAverage = ({ trades }: { trades: Trades }) => {
  return (
    <Grid container>
      <TradeVolumeCounter
        variant="small"
        xs={4}
        side={TradeSide.Buy}
        amount={trades.buyAverageVolume}
      />

      <TradeCounterLabel xs={4} title={"average"} paddingTop={"0px"} />

      <TradeVolumeCounter
        variant="small"
        xs={4}
        side={TradeSide.Sell}
        amount={trades.sellAverageVolume}
      />
    </Grid>
  );
};

export default observer(TradesSummaryAverage);
