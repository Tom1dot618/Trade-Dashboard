import { Box, Grid, Typography } from "@mui/material";
import dataStore from "../../Stores/DataStore";
import { observer } from "mobx-react-lite";
import Header from "./Header";
import Buckets from "./Buckets";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: any;
}) {
  return (
    <Box margin={"20px"}>
      <Typography variant="h6" color="error">
        <div role="alert">
          <p>Something went wrong:</p>
          {error.message}
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      </Typography>
    </Box>
  );
}

const App = () => {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Grid container margin="20px" spacing={2}>
          <Header tittle="Market Orders" />

          <Buckets subscriptions={dataStore.subscriptions.items} />
        </Grid>
      </ErrorBoundary>
    </>
  );
};

export default observer(App);
