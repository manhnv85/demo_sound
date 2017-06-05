import React, {Component} from 'react';

import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import Swiper from 'react-native-swiper';
import RNFS from 'react-native-fs';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
import { Player } from 'react-native-audio-streaming';
import Sound from 'react-native-sound';
import Swipeable from 'react-native-swipeable';

export default class Quiz extends Component{
    constructor(props){
    	super(props);
    	this.state = {
            track: null,
            is_play: false,
            list: [],
            c: 0
        };
    //     const track = new Sound(`${RNFS.DocumentDirectoryPath}/shirt.mp3`, null, (e) => {
    //       if (e) {
    //         console.log('error loading track:', e)
    //       } else {
    //           this.setState({track: track});
    //         //track.play();
    //         //console.log("track: "+track.play());
    //       }
    //   });
      this.init_data();
    }

    async init_data(){
        var path_json = `file://${RNFS.DocumentDirectoryPath}/demo.json`;
        //path_json = 'https://live.tienganh123.com/demo/demo.json';
        RNFS.readFile(path_json)
        .then((res) => {
            var data = JSON.parse(res);
            //console.log(res);
            let list = data.list;
            this.setState({list: list});
            //console.log(data.list);
        })
        .catch((err) => {
            console.log('err: ' + err);
        });
        // var url = 'https://live.tienganh123.com/demo/demo.json';
        // var response = await fetch(url);
        // var responseJson = await response.json();
        // var list = responseJson.list;
        // this.setState({list: list});
    }

    play_sound(){
        const url = "https://noidung.tienganh123.com/file/tienganhcoban/bai2/vocabulary1/eraser1.mp3";
      ReactNativeAudioStreaming.pause();
      ReactNativeAudioStreaming.resume();
      ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
      ReactNativeAudioStreaming.stop();
    }

    _onMomentumScrollEnd(e, state, context){
        //console.log("onMomentumScrollEnd");
        //const url = "https://noidung.tienganh123.com/file/tienganhcoban/bai2/vocabulary1/eraser1.mp3";
      //ReactNativeAudioStreaming.pause();
      //ReactNativeAudioStreaming.resume();
      //ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});
      //ReactNativeAudioStreaming.stop();
      var list = this.state.list;
      var c= this.state.c;
      let t = c + 1;
      if(list[t] !== undefined){
          this.onPlaySound(list[t].sound);
      }
    }

    _onScrollBeginDrag(e, state, context){
        console.log("_onScrollBeginDrag");
    }

    _onScrollBeginDrag(){
        console.log("onScrollBeginDrag");
    }
    _onTouchStartCapture(){
        console.log("_onTouchStartCapture");
    }

    playSoundTurn() {
        let url = 'https://noidung.tienganh123.com/file/tienganhcoban/bai2/vocabulary1/eraser1.mp3';
        ReactNativeAudioStreaming.play(url, { showIniOSMediaCenter: false, showInAndroidNotifications: false });
    }

    componentDidMount() {
        let list = this.state.list;
        console.log("phan tu dau tien: "+list[0]);
        //track.play();
    }

    playTrack() {
        let track = this.state.track;
        console.log("play track");
        track.play();
      }

      PauseTrack(){
          let track = this.state.track;
          track.pause();
      }

      onPlay(){
        this.setState({is_play: true});
      }

      onPlaySound(name){
          console.log(name);
          const track = new Sound(`${RNFS.DocumentDirectoryPath}/${name}`, null, (e) => {
            if (e) {
              console.log('error loading track:', e)
            } else {
                //this.setState({track: track});
              track.play();
              //console.log("track: "+track.play());
            }
        });
      }

      genHTML(){
          let list = this.state.list;
          var html = list.map((item, i) => {
              //console.log(`file://${RNFS.DocumentDirectoryPath}/${item.img}`);
              return (

                  <Image  style={{flex: 1, width: 200, height: 150}} key={i} source={{uri: `file://${RNFS.DocumentDirectoryPath}/${item.img}`, scale: 1}}>
                  <TouchableOpacity onPress={() => this.onPlaySound(item.audio)}>
                  <Text >Click</Text>
                  </TouchableOpacity>
                  </Image>
                )
          });
          //console.log("html" + html);
          return html;

      }

      initQuiz(){
          //var list = this.state.list;
          var list = this.state.list;
          var c = this.state.c;
          if(list[c] !== undefined){
              var row = list[c];
              var arr = row.img_list.split('|');
              var img = arr.map((item, i) => {
                  if(i % 2 == 0){
                      return (<Image key={i} style={{width: 150, height: 120}} source={{uri: `file://${RNFS.DocumentDirectoryPath}/${item}`}}/>);
                  }
                  else{
                      return (<Image key={i} style={{width: 150, height: 120,}} source={{uri: `file://${RNFS.DocumentDirectoryPath}/${item}`}}/>);
                  }
              });
              return(
                  <View style={{flex: 1}}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.onPlaySound(row.audio)}>
                    <Text style={{fontSize: 30, paddingTop: 20}}>{row.word}</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      {img}
                    </View>
                  </View>

              );
          }
      }



    render(){
        const leftContent = <View style={{flex: 1}}><Text>Pull to activate</Text></View>;
        var list = this.state.list;
        //console.log("audio dau tien: "+list[0]);
        if(list[0] !== undefined){
            console.log('co audio');
             this.onPlaySound(list[3].audio);
        }
        // if(list[0].audio)
        //     this.onPlaySound(list[0].audio);
        console.log("list: ", list);
        var arr = [];
        if(list[0] !== undefined){
            for(let i = 0; i < 4; i++){
                let t = list[i];
                arr.push(<View style={styles.slide1} key={i}><Text>{t.word}</Text></View>);
            }
        }

        return(
            <Swiper onTouchStartCapture={() => this._onTouchStartCapture()} onScrollBeginDrag={() => this._onScrollBeginDrag()} onScrollBeginDrag ={() =>this._onScrollBeginDrag()} onMomentumScrollEnd={() => this._onMomentumScrollEnd()} style={styles.wrapper} showsButtons={true} showsPagination={false}>
            {arr}
            </Swiper>
        );
    }

    init(){
        var list = this.state.list;
        var arr = [];
        list.map((item, i) => {
            arr.push(<View style={{flex: 1}} key={i}><Text>aaaaa</Text></View>);
        });

        console.log("arr:", arr);
        var c = this.state.c;
        // if(list[c] !== undefined){
        //     var row = list[c];
        //     var arr = row.img_list.split('|');
        //     var img = arr.map((item, i) => {
        //         if(i % 2 == 0){
        //             return (<Image key={i} style={{width: null, height: 120, flex: 1}} source={{uri: `file://${RNFS.DocumentDirectoryPath}/${item}`}}/>);
        //         }
        //         else{
        //             return (<Image key={i} style={{width: null, height: 120,flex: 1}} source={{uri: `file://${RNFS.DocumentDirectoryPath}/${item}`}}/>);
        //         }
        //     });
        //
        // }
        return(
            <Swiper removeClippedSubviews={false} onTouchStartCapture={() => this._onTouchStartCapture()} onScrollBeginDrag={() => this._onScrollBeginDrag()} onScrollBeginDrag ={() =>this._onScrollBeginDrag()} onMomentumScrollEnd={() => this._onMomentumScrollEnd()} style={styles.wrapper} showsButtons={true} showsPagination={false}>
            {arr}
            </Swiper>
        );
    }

    abc(){
        return (
            <Swiper onTouchStartCapture={() => this._onTouchStartCapture()} onScrollBeginDrag={() => this._onScrollBeginDrag()} onScrollBeginDrag ={() =>this._onScrollBeginDrag()} onMomentumScrollEnd={() => this._onMomentumScrollEnd()} style={styles.wrapper} showsButtons={true} showsPagination={false}>
                <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
                <TouchableOpacity onPress={() => this.playTrack()}>
                    <Text>Play Audio Test</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.PauseTrack()}>
                    <Text>Pause Audio Test</Text>
                </TouchableOpacity>
                <Player url={"https://noidung.tienganh123.com/file/baihoc/vocabulary/6000/bai11/well-ex2.mp3"} />
                </View>
                <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
                <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
                <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>
                </View>
                <View style={styles.slide3}>
                <Text style={{position: 'absolute', top: 0, right: 10}}>Quit</Text>
                <Text style={styles.text}>And simple</Text>
                <TouchableOpacity onPress={() => this.setState({fontSize: (this.state.fontSize || 10) + 5 })}>
                    <Animatable.Text transition="fontSize" style={{fontSize: this.state.fontSize || 10}}>Size me up, Scotty</Animatable.Text>
                </TouchableOpacity>
                </View>

            </Swiper>
        );
    }
}



var styles = StyleSheet.create({
  wrapper: {
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
},
slide: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#92BBD9',
}
});
