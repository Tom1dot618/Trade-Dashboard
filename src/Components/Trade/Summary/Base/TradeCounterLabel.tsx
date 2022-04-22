import React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Typography } from "@mui/material";
import viewStore from "../../../../Stores/ViewStore";

const TradeCounterLabel = ({
  xs,
  title,
  paddingTop,
}: {
  xs: number;
  title: string;
  paddingTop: string;
}) => {
  const label = viewStore.showDescription ? title : "";

  return (
    <Grid item xs={xs} textAlign={"center"} paddingTop={paddingTop}>
      <Typography variant="caption" textTransform="uppercase" color="white">
        {label}
      </Typography>
    </Grid>
  );
};

export default observer(TradeCounterLabel);
