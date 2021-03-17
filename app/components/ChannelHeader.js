import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { ListItem, Avatar } from "react-native-elements";
import NumberFormat from "react-number-format";

import { fetchVideoDetails } from "../actions";
import GLOBALS from "../utils/global";

class ChannelHeader extends Component {
    state = { views: 0 };

    componentDidMount() {
        if (this.props.vId) {
            this.getVideoDetails(this.props.vId);
        }
    }

    getVideoDetails = async () => {
        await this.props.fetchVideoDetails(this.props.vId);
        const { video } = this.props;
        this.setState({ views: video.statistics.viewCount });
    };

    renderList() {

        const { channel, videoTitle, video } = this.props;

        if (!channel) {
            return null;
        }

        if (video) {
            return (
                <View>
                    <ListItem key={channel.etag} bottomDivider containerStyle={{ backgroundColor: GLOBALS.BG_COLOR.BRAND }}>

                        <Avatar rounded source={{ uri: channel.snippet.thumbnails.medium.url }} />
                        <ListItem.Content>
                            <ListItem.Title>{<Text style={styles.vviews}>{channel.snippet.title}</Text>}</ListItem.Title>
                            <ListItem.Subtitle><NumberFormat
                                value={channel.statistics.subscriberCount}
                                displayType={"text"}
                                thousandSeparator={true}
                                renderText={value => (
                                    <Text style={styles.vviews1}>{value + " subscribers"}</Text>
                                )}
                            /></ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>



                </View>
            );
        }

        return (
            <View>
                <ListItem key={channel.etag} bottomDivider containerStyle={{ backgroundColor: GLOBALS.BG_COLOR.BRAND }}>

                    <Avatar rounded source={{ uri: channel.snippet.thumbnails.medium.url }} />
                    <ListItem.Content>
                        <ListItem.Title>{<Text style={styles.vtitle}>{videoTitle}</Text>}</ListItem.Title>
                        <ListItem.Subtitle>  <NumberFormat
                            value={this.state.views}
                            displayType={"text"}
                            thousandSeparator={true}
                            renderText={value => (
                                <Text style={styles.vviews1}>
                                    {channel.snippet.title + " . " + value + " views"}
                                </Text>
                            )}
                        /></ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>



            </View>
        );
    }
    render() {
        return <View>{this.renderList()}</View>;
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        channel: state.channels.find(channel => channel.id === ownProps.cId),
        video: state.video
    };
};

export default connect(
    mapStateToProps,
    { fetchVideoDetails }
)(ChannelHeader);

const styles = StyleSheet.create({
    vtitle: {
        color: "#ffffff",
        fontWeight: "500",
        fontSize: 16
    },
    vviews: {
        color: "#ffffff"
    },
    vviews1: {
        color: "#d3d3d3",
        fontSize: 11
    },
    vv2: {
        marginLeft: 15,
        color: "#ffffff",
        marginBottom: 10
    }
});
