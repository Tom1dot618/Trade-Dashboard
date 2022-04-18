import React from "react";
import { observer } from "mobx-react-lite";
import { red, green } from "@mui/material/colors";
import NumberUtils from "../../Utils/number-utils";
import { Grid, Typography } from "@mui/material";
import Trades from "../../Stores/Trade/Trades";

const TradesSummaryAverage = ({ trades }: { trades: Trades }) => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <Typography
          sx={{ color: green[800] }}
          fontSize="14px"
          fontWeight="bold"
        >
          {NumberUtils.financializeNumber(trades.buyAverageVolume)}
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography
          variant="caption"
          textTransform="uppercase"
          align="center"
          color="white"
        >
          average
        </Typography>
      </Grid>

      <Grid item xs={5}>
        <Typography
          sx={{ color: red[700] }}
          fontSize="14px"
          fontWeight="bold"
          textAlign="right"
        >
          {NumberUtils.financializeNumber(trades.sellAverageVolume)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default observer(TradesSummaryAverage);
