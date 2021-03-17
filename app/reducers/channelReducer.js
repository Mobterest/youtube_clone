import GLOBALS from "../utils/global";

export default (state = [], action) => {
  switch (action.type) {
    case GLOBALS.ACTION_CHANNEL:
      return [...state, action.payload];
    case GLOBALS.ACTION_CHANNEL + GLOBALS.ACTION_FAILED:
      return {
        error: true,
        data: action.payload
      };
    default:
      return state;
  }
};
