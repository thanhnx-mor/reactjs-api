import axios from "axios"
import * as Config from "./../const/Config"
const callAPI = (url, method = "GET", data = null ) => {
  return axios({
    method: method,
    url: `${Config.API_URL+url}`,
    data: data
  })
    .catch(function (error) {
      console.log(error);
    });
}

export default callAPI