import React from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
            <Icon 
                name="bars"
                color="white"
                size={25}
            />
        </TouchableWithoutFeedback>
        <Image style={styles.logo} source={require('../images/logo.png')}/>
        <Icon 
            name="search"
            color="white"
            size={25}
        />
    </View>
)

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        marginHorizontal: 15
    },
    logo: {
        width: 120,
        height: 40
    }
});