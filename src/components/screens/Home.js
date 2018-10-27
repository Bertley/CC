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
                <View style={{
                    backgroundColor: "#fff"
                }}>
                    <View style={styles.homeTop}>
                        <Image 
                            style={{height: 100, width: 100}}
                            source={config.images.logo}
                        >
                        </Image>
                    </View>
                    <SearchBar
                        placeholder='Search for your food'
                        style={styles.searchbar}
                        containerStyle={styles.searchcontainer}
                        inputContainerStyle={{
                            backgroundColor: "#fff", 
                            height: 40, 
                            alignItems:"center", 
                        }}
                    />
                </View>
                <View 
                    style={{
                        height:100 + "%", 
                        width: 100 + "%", 
                        backgroundColor: "#fff"
                    }}
                >
                    <View 
                        style={styles.homeMiddle}    
                    >
                        <Text>Your Items</Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    color:'blue',
                                }}
                            >View more</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 1, 
                            width: 100 + "%", 
                            height: 100 + "%"
                        }}
                    >
                        <HomeFeed/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeTop: {
        width: 100 + "%", 
        height: 300,
        backgroundColor: 'transparent',
        borderBottomColor: 'rgb(233,233,233)',  
        justifyContent: "center", 
        alignItems: 'center', 
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
    }, 
    homeMiddle: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        padding: 20, 
    }
}); 

export default Home