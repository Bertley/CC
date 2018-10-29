import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import {FoodFeed, HomeFeed} from "../container"; 
import config from "../../config"
import { Card, SearchBar, Button } from 'react-native-elements'; 
import Icon from 'react-native-vector-icons/FontAwesome';


class Home extends Component {

    constructor(){
        super(); 
    }

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
                <View>
                    <Card
                        containerStyle={{
                            width:46 + "%", 
                            marginLeft: 2 + '%', 
                            marginRight: 2 + '%',
                            shadowColor: 'transparent', 

                        }}
                        image={config.images.logo}>
                        <Text
                            style={{
                                textAlign: "center",
                                marginBottom: 10
                            }}
                        >Chicken</Text>
                        <Button
                            icon={
                                <Icon
                                name='plus-square'
                                size={15}
                                color='white'
                                />
                            }
                            iconRight
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "#000"}}
                            title= "333 Calories" />
                    </Card>
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