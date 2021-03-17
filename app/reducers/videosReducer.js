import GLOBALS from "../utils/global";

export default (state = [], action) => {
  switch (action.type) {
    case GLOBALS.ACTION_VIDEOS:
      return action.payload;

    case GLOBALS.ACTION_VIDEOS + GLOBALS.ACTION_FAILED:
      return {
        error: true,
        data: action.payload
      };
    default:
      return state;
  }
};
