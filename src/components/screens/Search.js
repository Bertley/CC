import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {FoodFeed, HomeFeed} from "../container"; 
import config from "../../config"
import { SearchBar, Button } from 'react-native-elements'; 
import Icon from 'react-native-vector-icons/FontAwesome';



class Home extends Component {

    render() {
        return(
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
                <View style={styles.SearchTop}>
                    <SearchBar
                        style={styles.searchbar}
                        containerStyle={styles.searchcontainer}
                        placeholder='Search for your food'
                        platform="android"
                        cancelButtonTitle="Cancel"
                        inputContainerStyle={{
                            backgroundColor: "#fff", 
                            height: 20, 
                            alignItems:"center", 
                        }}
                    />
                </View>
                <View 
                    style={{
                        alignItems: "center"
                    }}    
                >
                    <FoodFeed/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SearchTop: {
        width: 100 + "%", 
        height: 100,
        backgroundColor: '#fff',
        borderBottomColor: 'rgb(233,233,233)',  
        justifyContent: "center", 
        borderBottomWidth: StyleSheet.hairlineWidth, 
    },
    navText: {
        marginTop: 40, 
    }, 
    searchcontainer: {
        backgroundColor: '#fff',
        borderWidth: 0, //no effect
        shadowColor: 'white', //no effect
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        marginTop: 50
    }, 
    homeMiddle: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        padding: 20, 
    }
}); 

export default Home