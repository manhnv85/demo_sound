import React, {Component} from 'react';

import{
    Text,
    View,
    StyleSheet,
    FlatList,
    Navigator
} from 'react-native';

import {Provider, connect} from 'react-redux';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';

import Routes from './config/routes';

import getStore from './store';

// import App from './App';
// import Search from './components/Search';
// import Details from './components/Details';
// import VideoPlayerView from './components/VideoPlayerView';
//
// import {StackNavigator} from 'react-navigation';

const Navigation = StackNavigator(Routes, {
    headerMode: 'screen'
});

const navReducer = (state, action) => {
    const newState = Navigation.router.getStateForAction(action, state);
    return newState || state;
}

class App extends Component{
    render(){
        return(
            <Navigation
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        )
    }
}

const store = getStore(navReducer);

const AppIndex = connect(state => ({nav: state.nav}))(App);

export default Index = () => {
    return (
        <Provider store={store}>
            <AppIndex />
        </Provider>
    )
}

//export default IndexApp;

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
