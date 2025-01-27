import React, {Component} from 'react';

import {
    View, Text, StyleSheet
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import List from './components/List';
import Slide from './components/Slider';
import Header from './components/Header';
import Menu from './components/Menu';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateMenu(isOpen){
        this.setState({isOpen});
    }

    render(){
        console.log("nav: ", this.props.navigation);
        return(
            <View style={[{flex: 1}, styles.container]}>
                <SideMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    opChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>
                    <Slide />
                    <List navigation={this.props.navigation}/>
                </SideMenu>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
});

export default App;
