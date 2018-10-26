import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {FoodFeed} from "../container"; 

class Home extends Component {

    render() {
        return(
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
                <FoodFeed/>
            </View>
        )
    }
}


export default Home