import React from "react";
import { Box, Divider } from "@mui/material";
import TradesSummaryHeader from "./TradesSummaryHeader";
import TradesSummaryAverage from "./TradesSummaryAverage";
import TradesSummaryVolume from "./TradesSummaryVolume";
import TradesSummaryCounts from "./TradesSummaryCounts";
import Trades from "../../Stores/Trade/Trades";
import { observer } from "mobx-react-lite";

const TradesSummary = ({ trades }: { trades: Trades }) => {
  return (
    <Box>
      <TradesSummaryHeader trades={trades} />
      <Divider
        style={{
          background: "lightgrey",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        variant="fullWidth"
      />
      <TradesSummaryCounts trades={trades} />
      <TradesSummaryVolume trades={trades} />
      <TradesSummaryAverage trades={trades} />
      <Divider
        style={{
          background: "lightgrey",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        variant="fullWidth"
      />
    </Box>
  );
};

export default observer(TradesSummary);
