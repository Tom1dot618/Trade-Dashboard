import React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Typography } from "@mui/material";
import { red, green } from "@mui/material/colors";
import TradeSide from "../../../../Enums/TradeSide";

const TradeAmountCounter = ({
  xs,
  side,
  amount,
}: {
  xs: number;
  side: TradeSide;
  amount: number;
}) => {
  //--- color based on trade side
  const color = side === TradeSide.Buy ? green[800] : red[700];

  return (
    <Grid item xs={xs} alignItems={"baseline"} textAlign="center">
      <Typography sx={{ color: { color } }} fontSize="15px" fontWeight="normal">
        {amount}
      </Typography>
    </Grid>
  );
};

export default observer(TradeAmountCounter);
