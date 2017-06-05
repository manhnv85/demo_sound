/*
import {AppRegistry} from 'react-native';
import MainView from './main.js';
AppRegistry.registerComponent('demo_sound', () => MainView);
*/

/*
import {
  AppRegistry
} from 'react-native';
import AudioExample from './AudioExample';
AppRegistry.registerComponent('demo_sound', () => AudioExample);
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  NetInfo,
  Audio,
  AsyncStorage,
  Alert
} from 'react-native';

import Swiper from 'react-native-swiper';

import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import RNFS from 'react-native-fs';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
import { Player } from 'react-native-audio-streaming';

import Sound from 'react-native-sound';

export default class Home extends Component{
    constructor(props){
    	super(props);
    	this.state = {
            track: null,
            is_play: false,
            is_download: false
        };
        const track = new Sound('https://noidung.tienganh123.com/file/baihoc/vocabulary/6000/bai11/well-ex2.mp3', null, (e) => {
          if (e) {
            console.log('error loading track:', e)
          } else {
              this.setState({track: track});
            //track.play();
            //console.log("track: "+track.play());
          }
      });
      this.check_load_data();
    }

    DownloadFile(url, path, name){

        RNFS.exists(path)
        .then( (result) => {
            console.log("file exists: ", result);

            if(result){
                //return true;
            }
            else{
                RNFS.mkdir(path);
                console.log("tao thu muc:"+ path);
            }

          })
          .catch((err) => {

          });

        RNFS.downloadFile({
            fromUrl: url,
            toFile: `${path}${name}`,
        }).promise.then((r) => {
            console.log(`download: ${path}${name}`);
        });

    }

    check_load_data(){
        var path_json = `${RNFS.DocumentDirectoryPath}/demo.json`;
        console.log("path_json: " + path_json);
        var ok = false;
        RNFS.exists(path_json)
        .then( (result) => {
            if(result){
                console.log("co file json");
              this.setState({is_download: true, json_path: path_json});
            }
            else{
                console.log("ko co file json");
            }
            //this.init_data();
          })
          .catch((err) => {
            console.log("loi check_load_data" + err.message);
          });
          if(ok == true){
              console.log("init data");

          }
    }

    async _onDownload(){
        NetInfo.isConnected.fetch().then(isConnected => {
          console.log('First, is ' + (isConnected ? 'online' : 'offline'));
        });

        //var pid = this.state.pid;
        var url = 'https://live.tienganh123.com/demo/demo.json';
        var response = await fetch(url);
        var responseJson = await response.json();
        var list = responseJson.list;
        var pid = responseJson.pid;
        //let current_item = this.state.current_item;
        //this.setState({list: list, row: list[current_item]});
        console.log("list: "+responseJson.list);
        var ok = true;
        var count_suc = 0;

        list.map((item, i) => {
            var img_url = `${responseJson.url_path}${item.img}`;
            var audio_url = `${responseJson.url_path}${item.audio}`;
            var path = `${RNFS.DocumentDirectoryPath}/`;
            var img_name = item.img;
            console.log("i:"+ img_url + "" + path + img_name);
            let err = false;
            if(!this.DownloadFile(img_url, path, img_name)){
                err = true;
                console.log("download: " + img_name);
            }

            let audio_name = item.audio;
            if(!this.DownloadFile(audio_url, path, audio_name)){
                err = true;
            }
            count_suc++;
        });

        console.log("so download thanh cong: " + count_suc);
        if(ok == false){
            Alert.alert(
              'Thong bao',
              'Co loi trong qua trinh download',
              [
                //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log("Ok Pressed")},
              ],
              { cancelable: false }
            )
        }
        else{
            Alert.alert(
              'Thong bao',
              'Download thanh cong!',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log("Ok Pressed")},
              ],
              { cancelable: false }
          );
          RNFS.downloadFile({
              fromUrl: url,
              toFile: `${RNFS.DocumentDirectoryPath}/demo.json`,
          }).promise.then((r) => {
              //var list = this.state.list;
              this.setState({is_download: true});
              console.log("download json");
          });
          /*
          RNFS.downloadFile({
              fromUrl: 'https://noidung.tienganh123.com/file/tienganhcoban/bai12/vocabulary/shirt.jpg',
              toFile: `${RNFS.DocumentDirectoryPath}/shirt.jpg`,
          }).promise.then((r) => {
              console.log('ok-shirt.jpg');
          });

          RNFS.downloadFile({
              fromUrl: 'https://noidung.tienganh123.com/file/tienganhcoban/bai12/vocabulary/shirt.mp3',
              toFile: `${RNFS.DocumentDirectoryPath}/shirt.mp3`,
          }).promise.then((r) => {
              console.log('ok-shirt.mp3');
          });
          */
        }
    }
      render() {
          var arr = [];
          for(let i=0; i< 10; i++){
              arr.push(
                  <View style={styles.slide1} key={i}>
                    <TouchableOpacity onPress={() => console.log("i: "+i)}>
                        <Text>{i}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('User')}>
                        <Text>User</Text>
                    </TouchableOpacity>
                  </View>
              );
          }
        return (
            <View style={{alignItems: 'stretch', flex: 1}}>
              <StatusBar
                  backgroundColor = "blue"
                  barStyle = "light-content"
                  hidden = {true}
              />
              <Image
                    source={require('../../assets/bg.png')}
                    style={{flex: 1, resizeMode: 'cover', width: null, height: null}}
                >
                <Swiper  style={[styles.wrapper,]} showsButtons={true} showsPagination={false}>
                    {arr}
                </Swiper>
                {
                // {this.state.is_download ? (
                //     <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                //       <Text style={{fontSize: 40}} onPress={() => this.props.navigation.navigate('Quiz', {thamso: 'Hello'})}>Play</Text>
                //       </View>
                // ) : (
                //     <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                //       <Text style={{fontSize: 40}} onPress={() => this._onDownload()}>Download</Text>
                //       <Image source={{uri: 'https://noidung.tienganh123.com/file/tienganhcoban/bai12/vocabulary/t-shirt.jpg'}}/>
                //       </View>
                // )}
                }
                </Image>
            </View>
        )
      }
}



var styles = StyleSheet.create({
  wrapper: {
      flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    resizeMode: 'cover'
  },
  image: {
    flex: 1
  }
});
