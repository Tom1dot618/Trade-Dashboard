import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import Dashboard from "../Dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box width="300px">
          <Dashboard />
        </Box>
      </header>
    </div>
  );
}

export default observer(App);
