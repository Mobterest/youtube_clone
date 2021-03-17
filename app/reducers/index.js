import { combineReducers } from "redux";
import videosReducer from "./videosReducer";
import channelReducer from "./channelReducer";
import videoDetailsReducer from "./videoDetailsReducer";

export default combineReducers({ videos: videosReducer , channels: channelReducer, video: videoDetailsReducer});
