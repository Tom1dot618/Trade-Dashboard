import React from "react";
import { observer } from "mobx-react-lite";
import { Grid } from "@mui/material";
import Trades from "../../../Stores/Trade/Trades";
import TradeAmountCounter from "./Base/TradeAmountCounter";
import TradeSide from "../../../Enums/TradeSide";
import TradeCounterLabel from "./Base/TradeCounterLabel";

const TradesSummaryCounts = ({ trades }: { trades: Trades }) => {
  return (
    <Grid container>
      <TradeAmountCounter
        xs={4}
        side={TradeSide.Buy}
        amount={trades.buyCount}
      />

      <TradeCounterLabel xs={4} title={"amount"} paddingTop={"0px"} />

      <TradeAmountCounter
        xs={4}
        side={TradeSide.Sell}
        amount={trades.sellCount}
      />
    </Grid>
  );
};

export default observer(TradesSummaryCounts);
