import React from "react";
import { observer } from "mobx-react-lite";
import Trades from "../Trade/Trades";

import { Divider, Grid, Typography } from "@mui/material";
import { red, green } from "@mui/material/colors";
import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import Store from "../../Stores/Store";
import NumberUtils from "../../Utils/number-utils";

const Dashboard = () => {
  return (
    <>
      {/*--------------------------------------------------
          --- TRADES
          --------------------------------------------------*/}

      <Typography fontWeight="bold" variant="h6" gutterBottom>
        Market trades
      </Typography>

      <Grid>
        {/*--------------------------------------------------
          --- COUNTERS
          --------------------------------------------------*/}
        <Grid marginTop="20px" container spacing={0}>
          {/*--------------------------------------------------
          --- HEADER
          --------------------------------------------------*/}
          <Grid item xs={1}>
            <ArrowCircleUp sx={{ color: green[700] }} />
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{ color: green[800] }}
              variant="caption"
              textTransform="uppercase"
              marginTop="3px"
              marginLeft="10px"
              textAlign="left"
              display="block"
            >
              longs
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={4}>
            <Typography
              sx={{ color: red[900] }}
              variant="caption"
              textTransform="uppercase"
              marginRight="10px"
              marginTop="3px"
              textAlign="right"
              display="block"
            >
              shorts
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <ArrowCircleDown sx={{ color: red[800] }} />
          </Grid>

          {/*--------------------------------------------------
          --- DIVIDER
          --------------------------------------------------*/}
          <Grid item xs={12} marginTop="3px" marginBottom="5px">
            <Divider style={{ background: "lightgrey" }} variant="fullWidth" />
          </Grid>

          <Grid></Grid>

          {/*--------------------------------------------------
          --- AMOUNT
          --------------------------------------------------*/}
          <Grid item xs={5}>
            <Typography
              sx={{ color: green[800] }}
              fontSize="14px"
              fontWeight="bold"
            >
              {NumberUtils.internationalizeNumber(Store.trades.buyCount)}
            </Typography>
          </Grid>

          <Grid item xs={2} paddingTop="2px">
            <Typography
              variant="caption"
              textTransform="uppercase"
              align="center"
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
              {Store.trades.sellCount}
            </Typography>
          </Grid>

          {/*--------------------------------------------------
          --- VOLUME
          --------------------------------------------------*/}
          <Grid item xs={5}>
            <Typography
              sx={{ color: green[800] }}
              fontSize="25px"
              fontWeight="bold"
            >
              {NumberUtils.financializeNumber(Store.trades.buyVolume)}
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography
              variant="caption"
              textTransform="uppercase"
              marginTop="10px"
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
              {NumberUtils.financializeNumber(Store.trades.sellVolume)}
            </Typography>
          </Grid>

          {/*--------------------------------------------------
          --- AVERAGE
          --------------------------------------------------*/}
          <Grid item xs={5}>
            <Typography
              sx={{ color: green[800] }}
              fontSize="14px"
              fontWeight="bold"
            >
              {NumberUtils.financializeNumber(Store.trades.buyAverageVolume)}
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography
              variant="caption"
              textTransform="uppercase"
              align="center"
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
              {NumberUtils.financializeNumber(Store.trades.sellAverageVolume)}
            </Typography>
          </Grid>
        </Grid>

        {/*--------------------------------------------------
          --- DIVIDER
          --------------------------------------------------*/}
        <Grid marginTop="5px" marginBottom="5px">
          <Divider style={{ background: "lightgrey" }} variant="fullWidth" />
        </Grid>

        {/*--------------------------------------------------
          --- MESSAGE LIST
          --------------------------------------------------*/}

        <Trades />
      </Grid>
    </>
  );
};

export default observer(Dashboard);
