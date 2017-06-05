import React, {Component} from 'react';

import{
    View, Text
} from 'react-native';


import {connect} from 'redux';
import {getData} from '../actions';
class Hello extends component{
    render(){
        return(
            <View>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
}

export default connect({mapStateToProps, getData})(Hello);
