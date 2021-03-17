import React from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import Moment from "moment";

import ChannelHeader from "./ChannelHeader";
import GLOBALS from "../utils/global";

export default (DetailBox = ({ details }) => {
  Moment.locale("en");
  return (
    <View style={styles.container}>
      <TouchableHighlight style={{ height: 50 }} underlayColor="black">
        <View style={styles.header} style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.f_width}>
            <Text numberOfLines={2} ellipsizeMode="middle" style={styles.title}>
              {details.snippet.title}
            </Text>
          </View>
        </View>
      </TouchableHighlight>

      <ChannelHeader
        vId={details.id.videoId}
        cId={details.snippet.channelId}
        view={true}
      />
      <Text style={styles.published}>
        Published on {Moment(details.snippet.publishedAt).format("d MMM YYYY")}
      </Text>
      <Text style={styles.desc}>{details.snippet.description}</Text>
      <View style={styles.header} style={styles.v_cat}>
        <View style={styles.h_width}>
          <Text style={styles.cat}>Category</Text>
        </View>
        <View style={styles.h_width}>
          <Text style={styles.cat_det}>Entertainment</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: GLOBALS.BG_COLOR.BRAND
  },
  header: {
    backgroundColor: GLOBALS.BG_COLOR.BRAND
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 15,
    marginTop: 10,
    color: "#ffffff"
  },
  f_width: {
    width: "100%"
  },
  h_width: {
    width: "50%"
  },
  published: {
    marginLeft: 15,
    color: "#ffffff",
    marginBottom: 10,
    marginTop: 10
  },
  desc: {
    marginLeft: 15,
    color: "#ffffff",
    marginBottom: 10
  },
  cat: {
    marginLeft: 15,
    color: "#ffffff",
    marginBottom: 10,
    fontSize: 16
  },
  v_cat: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  cat_det: {
    color: GLOBALS.CAT_COLOR,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16
  }
});
