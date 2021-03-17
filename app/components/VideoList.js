import React from "react";
import {View} from "react-native";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => 
   
      <VideoItem key={video.etag}
        video={video}
        onVideoSelect={onVideoSelect}
      />
 
  );
  return (<View>{renderedList}</View>);
}

export default VideoList;