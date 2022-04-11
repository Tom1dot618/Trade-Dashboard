import { green } from "@mui/material/colors";

class ColorUtils {
  static greenIntensityColor(number: number) {
    if (number > 1000000) return green[900];
    else if (number > 100000) return green[500];
    else if (number > 10000) return green[300];
    else if (number > 1000) return green[100];
    else return green[50];
  }
}

export default ColorUtils;
