import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {HomeStack} from './Router';

import {Provider} from 'react-redux';
import { connect } from 'react-redux';


import store from './store/store.js';
import CounterContainer from './containers/CounterContainer.js';
//import store from './configStore';
//import Hello from './components/Hello';
require('./example');

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <View style={styles.container}>
                  <CounterContainer/>
                </View>
              </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// export default class App extends Component{
//     render(){
//         return(
//             <HomeStack />
//         );
//     }
// }
