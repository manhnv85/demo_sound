import React from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';


import Home from './screens/Home';
import User from './screens/User';
import Detail from './screens/Detail';
import Menu from './screens/Menu';
import Quiz from './screens/Quiz';

export const HomeStack = StackNavigator({
    ManHinh_Home:{
        screen: Home,
        navigationOptions: {
            title: 'Trang Chu',
            header: null
        }
    },
    ManHinh_Detail:{
        screen: Detail,
        navigationOptions: {
            title: 'Chi tiet'
        }
    },
    Quiz: {
        screen: Quiz
    },
    User: {
        screen: User
    }
});

export const UserStack = StackNavigator({
    ManHinh_User:{
        screen: User,
        navigationOptions:{
            title: 'Tai Khoan'
        }
    }
});

export const Tabs = TabNavigator({
    Home:{
        screen: HomeStack,
        navigationOptions:{
            tabBarLabel: 'Home'
        }
    },
    User:{
        screen: UserStack,
        navigationOptions:{
            tabBarLabel: 'User'
        }
    }
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions:{
        style: {
            backgroundColor: '#ccc',

        },
        activeTintColor: '#e91e63',
        inactiveTintColor: 'blue',

    }
});

export const SideMenu = DrawerNavigator({
    Tabbar: {
        screen: Tabs
    },

},
{
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: props => <Menu {...props} />
}
);
