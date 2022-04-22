import axios from "axios";

import { BybitEndPointUrl, BybitRestEndPoint } from "../Exchanges/Bybit/Enums";

class DataUtils {
  static fetchData(endPoint: BybitRestEndPoint): any {
    const USECORS = true;
    const CORSSERVER = "https://cors-anywhere.herokuapp.com/";

    //--- create endpoint url
    const url = BybitEndPointUrl.MainnetRestServer1 + endPoint;
    console.log(url);
    //--- return axios promise
    return axios({
      url: USECORS ? CORSSERVER + url : url,
    })
      .then((response) => {
        return response.data.result;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default DataUtils;
