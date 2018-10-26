import React, {Component} from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import { Home, Register, Login, YourItems, Search } from './components/screens';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator} from 'react-navigation'; 


const Tabs = createBottomTabNavigator({
    "Home": Home, 
    "Search": Search, 
    "Your Items": YourItems
});

const IntroStack = createStackNavigator({
    login: Login, 
    register: Register, 
});

const MainStack = createSwitchNavigator({
    intro: IntroStack,
    main: Tabs, 
}); 

class CC extends Component {
    render(){
        return <MainStack/>;
    }
}

export default CC