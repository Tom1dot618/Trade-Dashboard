import React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Typography } from "@mui/material";
import { red, green } from "@mui/material/colors";
import NumberUtils from "../../Utils/number-utils";
import Trades from "../../Stores/Trade/Trades";

const TradesSummaryCounts = ({ trades }: { trades: Trades }) => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <Typography
          sx={{ color: green[800] }}
          fontSize="14px"
          fontWeight="bold"
        >
          {NumberUtils.internationalizeNumber(trades.buyCount)}
        </Typography>
      </Grid>

      <Grid item xs={2} paddingTop="2px">
        <Typography
          variant="caption"
          textTransform="uppercase"
          align="center"
          color="white"
        >
          amount
        </Typography>
      </Grid>

      <Grid item xs={5}>
        <Typography
          sx={{ color: red[700] }}
          fontSize="14px"
          fontWeight="bold"
          textAlign="right"
        >
          {trades.sellCount}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default observer(TradesSummaryCounts);
