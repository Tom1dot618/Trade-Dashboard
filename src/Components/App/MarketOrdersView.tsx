import React from "react";
import { observer } from "mobx-react-lite";

import { Card } from "@mui/material";

import TradesSummary from "../Trade/TradesSummary";
import TradesList from "../Trade/TradesList";
import Trades from "../../Stores/Trade/Trades";

const MarketOrdersView = ({ trades }: { trades: Trades }) => {
  return (
    <Card variant="outlined" sx={{ padding: "10px" }}>
      <TradesSummary trades={trades} />
      {<TradesList trades={trades} />}
    </Card>
  );
};

export default observer(MarketOrdersView);
