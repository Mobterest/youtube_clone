import React, {Component} from 'react';
import { ScrollView, ActivityIndicator, Text, StyleSheet, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
//The connect() function connects a React component to a Redux store.
import {fetchVideosAndChannels} from "../actions";
// /Actions are the only source of information for the store
import GLOBALS from "../utils/global";
import ActionBarImage from "./ActionBarImage";
import SearchFunc from "./SearchFunc";
import VideoList from "./VideoList";


class Container extends Component {
  constructor(props) {
    super(props);
  }

  state = { videos: [], setanimate: true, search: "", refreshing: false,  isMounted: false };

  static navigationOptions = {
    title: GLOBALS.TITLE,
    headerLeft: <ActionBarImage />,
    headerStyle: {
      backgroundColor: GLOBALS.BG_COLOR.BRAND
    },
    headerTintColor: "#ffffff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  componentDidMount() {
    this.onTermSubmit(GLOBALS.DEFAULT_SEARCH);
  }

  onTermSubmit = async term => {
    if (term === "") {
      term = this.state.search;
    }
    await this.props.fetchVideosAndChannels(term);
    this.setState({ setanimate: false, search: term, refreshing: false });
  };

  onVideoSelect = video => {
    this.props.navigation.navigate("_details", { video: video });
  };

  render() {
    const { setanimate } = this.state;
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: GLOBALS.BG_COLOR.SCROLLVIEW
        }}
        stickyHeaderIndices={[0]}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onTermSubmit}
          />
        }>

        {setanimate && ( <ActivityIndicator  size="large" color="#ffffff" animating={this.state.setanimate} /> )}
        <SearchFunc onTermSubmit={this.onTermSubmit} />
        <Content videos={this.props.videos} onVideoSelect={this.onVideoSelect} />

      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return { videos: state.videos };
};

function Content(props) {
  if (props.videos.error) {
    return <Text style={styles.errorMsg}>{props.videos.data}</Text>;
  }

  if (props.videos.error === undefined) {
    return (
      <VideoList onVideoSelect={props.onVideoSelect} videos={props.videos} />
    );
  }
}
export default connect( mapStateToProps, { fetchVideosAndChannels } )(Container);

const styles = StyleSheet.create({
  errorMsg: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center"
  }
});

