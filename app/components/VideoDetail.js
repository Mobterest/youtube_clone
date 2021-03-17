import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import WebView from "react-native-webview";

import DetailBox from "./DetailBox";
import GLOBALS from "../utils/global";

export default class VideoDetail extends Component {
  
  render() {
    const details = this.props.route.params.video;
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <WebView
          source={{
            uri: `${GLOBALS.BASE_URI}${details.id.videoId}`
          }}
          style={styles.iframe}
        />
        <DetailBox details={details} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  iframe: {
    width: "100%",
    height: 50
  }
});
