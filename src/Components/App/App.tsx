import { Grid, Typography } from "@mui/material";
import MarketOrdersView from "./MarketOrdersView";
import store from "../../Stores/Store";
import { observer } from "mobx-react-lite";

const App = () => {
  return (
    <Grid container margin="20px">
      <Grid item xs={12}>
        <Typography fontWeight="bold" variant="h6" color="white" gutterBottom>
          Market trades
        </Typography>
      </Grid>

      <>
        {store.pairTrades.items.forEach((pairTrades, index) => {
          console.log(store.pairTrades.items[0].count);
        })}
      </>

      <Grid item xs={4}>
        <MarketOrdersView trades={store.pairTrades.items[0]} />
      </Grid>
    </Grid>
  );
};

export default observer(App);
