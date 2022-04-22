import React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Typography } from "@mui/material";
import { red, green } from "@mui/material/colors";
import TradeSide from "../../../../Enums/TradeSide";

const TradeVolumeCounter = ({
  variant,
  xs,
  side,
  amount,
}: {
  variant: string;
  xs: number;
  side: TradeSide;
  amount: number;
}) => {
  //--- variant font size
  const fontSizeAmount = variant === "big" ? "26px" : "14px";
  const fontSizeThousandIndicator = variant === "big" ? "18px" : "14px";
  const fontWeight = variant === "big" ? "bold" : "normal";

  //--- color based on trade side
  const color = side === TradeSide.Buy ? green[800] : red[700];

  //--- saimplify the amount
  let thousandIndicator = "";
  if (amount > 1000000) {
    thousandIndicator = "M";
    amount = amount / 1000000;
  } else if (amount > 1000) {
    thousandIndicator = "K";
    amount = amount / 1000;
  }

  if (amount > 100) {
    amount = Math.round(amount);
  } else if (amount > 10) {
    amount = Math.round(amount * 10) / 10;
  } else {
    amount = Math.round(amount * 100) / 100;
  }

  return (
    <Grid item xs={xs}>
      <Grid container alignItems={"baseline"}>
        <Grid item xs={8} textAlign="right">
          <Typography
            sx={{ color: { color } }}
            fontSize={fontSizeAmount}
            fontWeight={fontWeight}
          >
            {amount}
          </Typography>
        </Grid>
        <Grid item xs={4} textAlign="center" sx={{ verticalAlign: "middle" }}>
          <Typography
            sx={{ color: { color }, marginLeft: "2px" }}
            fontSize={fontSizeThousandIndicator}
            textAlign={"left"}
            fontWeight={fontWeight}
          >
            {thousandIndicator}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default observer(TradeVolumeCounter);
