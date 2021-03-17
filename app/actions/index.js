import apiRequest from "../api/Youtube";
import _ from "lodash";
import GLOBALS from "../utils/global";

export const fetchVideosAndChannels = term => async (dispatch, getState) => {
  await dispatch(fetchVideos(term));
  if (!getState().videos.error) {
    _.chain(getState().videos)
      .map("snippet")
      .uniq()
      .forEach(id => dispatch(fetchChannel(id.channelId)))
      .value();
  }
};

export const fetchVideos = term => async dispatch => {
  await dispatch(
    apiRequest(
      "/search",
      { q: term, part: "snippet", maxResults: 10 },
      GLOBALS.ACTION_VIDEOS
    )
  );
};

export const fetchChannel = id => async dispatch => {
  await dispatch(
    apiRequest(
      "/channels",
      { id: id, part: "snippet,contentDetails,statistics", maxResults: 1 },
      GLOBALS.ACTION_CHANNEL
    )
  );
};

export const fetchVideoDetails = id => async dispatch => {
  await dispatch(
    apiRequest(
      "/videos",
      { id: id, part: "snippet,contentDetails,statistics", maxResults: 1 },
      GLOBALS.ACTION_VID_DETAILS
    )
  );
};
