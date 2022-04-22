import React from "react";
import { observer } from "mobx-react-lite";
import { Card } from "@mui/material";

import TradesSummary from "../Trade/Summary/TradesSummary";
import TradesList from "../Trade/List/TradesList";
import Trades from "../../Stores/Trade/Trades";
import TradeDivider from "../Trade/Summary/Base/TradeDivider";
import viewStore from "../../Stores/ViewStore";

const MarketOrdersView = ({ trades }: { trades: Trades }) => {
  //--- include or ommit list of executed trades
  const tradeList = viewStore.showTrades ? (
    <>
      {" "}
      <TradeDivider />
      <TradesList trades={trades} />
    </>
  ) : null;

  const onMouseOver = () => viewStore.onMouseInside(true);
  const onMouseOut = () => viewStore.onMouseInside(false);

  return (
    <Card
      variant="outlined"
      sx={{ padding: "10px" }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <TradesSummary trades={trades} />
      {tradeList}
    </Card>
  );
};

export default observer(MarketOrdersView);
