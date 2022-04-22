import React from "react";
import { Grid, Typography } from "@mui/material";
import { red, green } from "@mui/material/colors";
import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import Trades from "../../../Stores/Trade/Trades";
import { observer } from "mobx-react-lite";
import viewStore from "../../../Stores/ViewStore";

const TradesSummaryHeader = ({ trades }: { trades: Trades }) => {
  let pair = (
    <Grid item xs={4}>
      <Typography
        color="white"
        variant="body1"
        textTransform="uppercase"
        fontWeight="bold"
        textAlign="center"
        display="block"
        minHeight="28px"
        padding="2px"
      >
        {trades.pair}
      </Typography>
    </Grid>
  );

  if (!viewStore.showDescription) {
    pair = (
      <Grid item xs={10}>
        <Typography
          color="white"
          variant="h6"
          textTransform="uppercase"
          fontWeight="bold"
          textAlign="center"
          display="block"
        >
          {trades.pair}
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid item xs={1}>
        {viewStore.showIcons ? (
          <ArrowCircleUp sx={{ color: green[700] }} />
        ) : null}
      </Grid>

      {viewStore.showDescription && (
        <Grid item xs={3}>
          <Typography
            sx={{ color: green[800] }}
            variant="caption"
            textTransform="uppercase"
            marginTop="5px"
            marginLeft="10px"
            textAlign="left"
            display="block"
          >
            longs
          </Typography>
        </Grid>
      )}

      {pair}

      {viewStore.showDescription && (
        <Grid item xs={3}>
          <Typography
            sx={{ color: red[900] }}
            variant="caption"
            textTransform="uppercase"
            marginRight="10px"
            marginTop="5px"
            textAlign="right"
            display="block"
          >
            shorts
          </Typography>
        </Grid>
      )}

      <Grid item xs={1}>
        {viewStore.showIcons ? (
          <ArrowCircleDown sx={{ color: red[800] }} />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default observer(TradesSummaryHeader);
