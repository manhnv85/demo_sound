import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Alert
} from 'react-native';
const Sound = require('react-native-sound');

const Button = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.button}>{title}</Text>
  </TouchableOpacity>
);

import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import RNFS from 'react-native-fs';
import * as Progress from 'react-native-progress';

const Header = ({children}) => (<Text style={styles.header}>{children}</Text>);

const Feature = ({title, onPress, description, buttonLabel = "PLAY"}) => (
  <View style={styles.feature}>
    <Header>{title}</Header>
    <Button title={buttonLabel} onPress={onPress}/>
  </View>);

const requireAudio = require('./advertising.mp3');

class MainView extends Component {

  constructor(props) {
    super(props);

    Sound.setCategory('Ambient', true); // true = mixWithOthers

    this.playSoundBundle = () => {
      const s = new Sound('https://noidung.tienganh123.com/file/baihoc/phatamcobanmoi/bai1/lythuyet/58.Can you see the sea.mp3', Sound.MAIN_BUNDLE, (e) => {
        if (e) {
          console.log('error', e);
        } else {
          s.setSpeed(1);
          console.log('duration', s.getDuration());
          s.play(() => s.release()); // Release when it's done so we're not using up resources
        }
      });
    };

    this.playSoundLooped = () => {
      if (this.state.loopingSound) {
        return;
      }
      const s = new Sound(`${RNFS.DocumentDirectoryPath}/demo.mp3`, Sound.MAIN_BUNDLE, (e) => {
        if (e) {
          console.log('error', e);
        }
        s.setNumberOfLoops(-1);
        s.play();
      });
      this.setState({loopingSound: s});
    };

    this.stopSoundLooped = () => {
      if (!this.state.loopingSound) {
        return;
      }

      this.state.loopingSound
        .pause()
        .release();
      this.setState({loopingSound: null});
    };

    this.playSoundFromRequire = () => {
      const s = new Sound(requireAudio, (e) => {
        if (e) {
          console.log('error', e);
          return;
        }

        s.play(() => s.release());
      });
    };

    this.state = {
      loopingSound: undefined,
    };
  }

  renderiOSOnlyFeatures() {
    return [
      <Feature key="require" title="Audio via 'require' statement" onPress={this.playSoundFromRequire}/>,
    ]
  }

  onDownloadAudioPress(){
      RNFS.downloadFile({
        fromUrl: 'https://tienganhphothong.tienganh123.com/file/phothong/lop6/bai2/vocab1/audio/country-house.mp3',
        toFile: `${RNFS.DocumentDirectoryPath}/demo.mp3`,
      }).promise.then((r) => {
          Alert.alert(
            'Thong bao',
            'Download video thanh cong',
            [
              //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('Ok Pressed')},
            ],
            { cancelable: false }
        );
        //this.setState({ isDone: true, isExisted: true , pathvideo: `${RNFS.DocumentDirectoryPath}/demo.mp4`, path_img: 'https://goldenkids-data.tienganh123.com/file/learn/child/ta345_new/data/video/grade3/unit1/lesson1/lesson1_GOLDENKIDS.jpg', title: 'Unit 1 - Hello'})
      });
  }

  play_sound(){
      const url = "http://lacavewebradio.chickenkiller.com:8000/stream.mp3";
    ReactNativeAudioStreaming.pause();
    ReactNativeAudioStreaming.resume();
    ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
    ReactNativeAudioStreaming.stop();
  }

  render() {
    return <View style={styles.container}>
      <Feature title="Main bundle audio" onPress={this.playSoundBundle}/>
      {this.state.loopingSound
        ? <Feature title="Main bundle audio (looped)" buttonLabel={'STOP'} onPress={this.stopSoundLooped}/>
        : <Feature title="Main bundle audio (looped)" buttonLabel={'PLAY'} onPress={this.playSoundLooped}/>
      }
      { Platform.OS === 'ios' ? this.renderiOSOnlyFeatures() : null }
      <TouchableOpacity onPress={() => this.play_sound()}>
        <Text>aaaaaaaa</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.onDownloadAudioPress()}>
        <Text>Download Audio</Text>
      </TouchableOpacity>
      <Progress.Bar progress={0.3} width={200} />
      <Progress.Pie progress={0.4} size={50} />
      <Progress.Circle size={30} indeterminate={true} />
      <Progress.CircleSnail color={['red', 'green', 'blue']} />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  feature: {
    padding: 20,
    alignSelf: 'stretch',
  }
});

export default MainView;
