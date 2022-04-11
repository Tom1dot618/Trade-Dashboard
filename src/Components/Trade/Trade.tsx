import React from "react";
import { observer } from "mobx-react-lite";

import { Typography } from "@mui/material";

const Trade = () => {
  return (
    <div className="Trade">
      <Typography>Trade</Typography>
    </div>
  );
};

export default observer(Trade);
