import React from "react";
import { observer } from "mobx-react-lite";
import { Box, Grid } from "@mui/material";
import Subscription from "../../Stores/Subscription/Subscription";
import MarketOrdersView from "./MarketOrdersView";

function Buckets({
  subscriptions,
}: {
  subscriptions: Subscription[];
}): JSX.Element {
  return (
    <>
      {subscriptions.map((subscription, index) => (
        <Grid key={index} item xs={2}>
          <MarketOrdersView trades={subscription.trades} />
          <Box height="20px" />
        </Grid>
      ))}
    </>
  );
}

export default observer(Buckets);
