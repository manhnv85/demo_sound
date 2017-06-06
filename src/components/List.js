import React, {Component} from 'react';

import{
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import {getTwoItems} from '../api/api';




class List extends Component{

    _renderItem(item){
        const {navigate} = this.props.navigation
        console.log(this.props.navigation);
        return (
            <TouchableWithoutFeedback onPress={
                () => navigate('Details', {item: item})}

            >
                <Image style={{width: 120, height:180}} source={{uri: item.image}}/>
            </TouchableWithoutFeedback>
        );
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <View>
                    <Text style={styles.text}>My List</Text>
                    <FlatList
                        horizontal={true}
                        ItemSeparatorComponent={() => <View style={{width: 5}}/>}
                        renderItem={({item}) => this._renderItem(item)}
                        data ={getTwoItems[0]}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Top Picks For You</Text>
                    <FlatList
                        horizontal={true}
                        ItemSeparatorComponent={() => <View style={{width: 5}}/>}
                        renderItem={({item}) => this._renderItem(item)}
                        data ={getTwoItems[1]}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
});

export default List;
