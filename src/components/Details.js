import React, {Component} from 'react';

import{
    Text,
    View,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';

class Details extends Component{

    static NavigationOptions = {
        header: {
            visiable: false
        }
    }
    render(){
        return(
            <View>
                <Text>Details</Text>
            </View>
        )
    }
}

export default Details;
