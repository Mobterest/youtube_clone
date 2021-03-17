import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import ChannelHeader from "./ChannelHeader";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <TouchableHighlight onPress={() => onVideoSelect(video)}>
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={{ uri: video.snippet.thumbnails.medium.url }}
        />
        <ChannelHeader
          
          vId={video.id.videoId}
          cId={video.snippet.channelId}
          videoTitle={video.snippet.title}
        />
      </View>
    </TouchableHighlight>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  stretch: {
    width: "100%",
    height: 200
  }
});
