import React from "react";
import { observer } from "mobx-react-lite";
import { Grid, Typography } from "@mui/material";

const Header = ({ tittle }: { tittle: string }) => {
  return (
    <Grid item xs={12}>
      <Typography fontWeight="bold" variant="h6" color="white" gutterBottom>
        {tittle}
      </Typography>
    </Grid>
  );
};

export default observer(Header);
