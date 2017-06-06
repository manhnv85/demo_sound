import React, {Component} from 'react';

import{
    Text,
    View,
    StyleSheet,
    FlatList,
    Navigator
} from 'react-native';

import App from './App';
import Search from './components/Search';
import Details from './components/Details';

import {StackNavigator} from 'react-navigation';

const IndexApp = StackNavigator({
    Home: {
        screen: App,
        navigationOptions: {
            header: null
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: null
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            header: null
        }
    }
},{
    headerMode: 'screen'
});

export default IndexApp;

// class IndexApp extends Component{
//     return(){
//         _renderScene(route, navigator){
//             var navigator = {navigator}
//             switch (route.ident) {
//                 case 'App':
//                     return <App />
//                     break;
//                 case 'Search':
//
//             }
//         }
//
//         render(
//             <Navigator
//                 initialRoute={{ident: 'Search'}}
//                 renderScene={this._renderScene}
//             />
//         )
//     }
// }
