import React, {Component} from 'react';

import {
    View, Text, StyleSheet
} from 'react-native';

import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation';

class VideoPlayerView extends Component{
    componentWillMount() {
        //Orientation.lockToLandscape();
    }
    render(){
        return(
            <View style={styles.container}>
                <VideoPlayer
                    source={require('../videos/video.mp4')}
                    title={this.props.title}
                    onBack={() => null}
                />
            </View>
        )
    }
}

export default VideoPlayerView;

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});
