import React from "react";
import { Box, Grid } from "@mui/material";
import TradesSummaryHeader from "./TradesSummaryHeader";
import TradesSummaryAverage from "./TradesSummaryAverage";
import TradesSummaryVolume from "./TradesSummaryVolume";
import Trades from "../../../Stores/Trade/Trades";
import { observer } from "mobx-react-lite";
import TradeDivider from "./Base/TradeDivider";
import TradesSummaryCounts from "./TradesSummaryCounts";

const TradesSummary = ({ trades }: { trades: Trades }) => {
  return (
    <Box>
      <TradesSummaryHeader trades={trades} />
      <TradeDivider />

      <Grid container paddingLeft={"10px"} paddingRight={"5px"}>
        <TradesSummaryCounts trades={trades} />
        <TradesSummaryVolume trades={trades} />
        <TradesSummaryAverage trades={trades} />
      </Grid>
    </Box>
  );
};

export default observer(TradesSummary);
