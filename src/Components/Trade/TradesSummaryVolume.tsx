import React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Typography } from "@mui/material";
import { red, green } from "@mui/material/colors";
import NumberUtils from "../../Utils/number-utils";
import Trades from "../../Stores/Trade/Trades";

const TradesSummaryVolume = ({ trades }: { trades: Trades }) => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <Typography
          sx={{ color: green[800] }}
          fontSize="25px"
          fontWeight="bold"
        >
          {NumberUtils.financializeNumber(trades.buyVolume)}
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography
          variant="caption"
          textTransform="uppercase"
          paddingTop="20px"
          color="white"
        >
          volume
        </Typography>
      </Grid>

      <Grid item xs={5}>
        <Typography
          sx={{ color: red[700] }}
          fontSize="25px"
          textAlign="right"
          fontWeight="bold"
        >
          {NumberUtils.financializeNumber(trades.sellVolume)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default observer(TradesSummaryVolume);
