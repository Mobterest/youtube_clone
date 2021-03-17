import axios from "axios";
import GLOBALS from "../utils/global";

export default (apiRequest = (endpoint, params, type) => async dispatch => {
  params.key = GLOBALS.API_KEY;
  await axios
    .get(GLOBALS.API_URL + endpoint, {
      params: params
    })
    .then(res => {
      if (type === GLOBALS.ACTION_VIDEOS) {
        dispatch({ type: type, payload: res.data.items });
      } else {
        dispatch({ type: type, payload: res.data.items[0] });
      }
    })
    .catch(err => {
      dispatch({ type: type + GLOBALS.ACTION_FAILED, payload: err.message });
    });
});
