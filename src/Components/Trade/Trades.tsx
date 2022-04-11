import React from "react";
import { observer } from "mobx-react-lite";
import { Box, Grid, Typography } from "@mui/material";
import Store from "../../Stores/Store";
import { blueGrey, green, red } from "@mui/material/colors";
import NumberUtils from "../../Utils/number-utils";

const Trades = () => {
  return (
    <>
      {Store.trades.items
        .slice(0)
        .reverse()
        .map((trade, index) => (
          <Box key={index}>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                {trade.side === "Buy" ? (
                  trade.size < 1000 ? (
                    <Typography variant="caption" sx={{ color: blueGrey[400] }}>
                      {NumberUtils.financializeNumber(trade.size)}
                    </Typography>
                  ) : (
                    <Typography variant="caption" sx={{ color: blueGrey[50] }}>
                      {NumberUtils.financializeNumber(trade.size)}
                    </Typography>
                  )
                ) : (
                  ""
                )}
              </Grid>
              {trade.side === "Buy" ? (
                <Grid item xs={4} textAlign="center">
                  <Typography variant="caption" sx={{ color: green[800] }}>
                    {trade.price}
                  </Typography>
                </Grid>
              ) : (
                <Grid item xs={4} color="red" textAlign="center">
                  <Typography variant="caption" sx={{ color: red[700] }}>
                    {trade.price}
                  </Typography>
                </Grid>
              )}

              <Grid item xs={4} textAlign="right">
                {trade.side === "Sell" ? (
                  trade.size < 1000 ? (
                    <Typography variant="caption" sx={{ color: blueGrey[400] }}>
                      {NumberUtils.financializeNumber(trade.size)}
                    </Typography>
                  ) : (
                    <Typography variant="caption" sx={{ color: blueGrey[50] }}>
                      {NumberUtils.financializeNumber(trade.size)}
                    </Typography>
                  )
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Box>
        ))}
    </>
  );
};

export default observer(Trades);
