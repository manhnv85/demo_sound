import React, {Component} from 'react';

import {
    View, Text, StyleSheet
} from 'react-native';

import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import Espisodes from './Espisodes';
import Trainers from './Trainers';

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} ><Text>FirstRoute</Text></View>;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} ><Text>SecondRoute</Text></View>;

class TabEpisodes extends Component{
    constructor(props){
    	super(props);
        this.state = {
            index: 0,
            routes: [
                {key:'1', title: 'Episodes'},
                {key:'2', title: 'Trailers & More'}
            ]
        }
    }

    _handleChangeTab(index){
        this.setState({index})
    }

    _renderHeader(props){
        return <TabBar {...props}/>
    }

    _renderScene2 = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
      });

    _renderScene({route}){
        //console.log("route", route.key);
        switch(route.key){
            case '1':
                return <Espisodes episodes={this.props.data}/>
            case '2':
                return <Trainers />
            default:
                return null;
        }
    }

    render(){
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene.bind(this)}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab.bind(this)}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 2,
        borderColor: 'black'
    }
});

export default TabEpisodes;
