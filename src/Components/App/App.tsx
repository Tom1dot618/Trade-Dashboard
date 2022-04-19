import { Grid, Typography } from "@mui/material";
import MarketOrdersView from "./MarketOrdersView";
import store from "../../Stores/Store";
import { observer } from "mobx-react-lite";

const App = () => {
  return (
    <Grid container margin="20px" spacing={2}>
      <Grid item xs={12}>
        <Typography fontWeight="bold" variant="h6" color="white" gutterBottom>
          Market trades
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <MarketOrdersView trades={store.pairTrades.items[0]} />
      </Grid>
      <Grid item xs={3}>
        <MarketOrdersView trades={store.pairTrades.items[1]} />
      </Grid>
      <Grid item xs={3}>
        <MarketOrdersView trades={store.pairTrades.items[2]} />
      </Grid>
    </Grid>
  );
};

export default observer(App);
