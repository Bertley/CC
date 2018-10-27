import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {FoodFeed, HomeFeed} from "../container"; 
import config from "../../config"
import { SearchBar, Button } from 'react-native-elements'; 
import Icon from 'react-native-vector-icons/FontAwesome';



class Home extends Component {
    constructor(){
        super(); 
        this.state = {
            credentials: {
                email: "", 
                password: ""
            }
        }; 
    }

    updateText(text, field){
        let newCredentials = Object.assign(this.state.credentials); 
        newCredentials[field] = text; 
        this.setState({
            credentials: newCredentials
        }); 
    }

    login() {
       return fetch(config.baseUrl + 'login', {
           method: 'POST', 
           headers: {
               Accept: 'application/json', 
               'Content-Type': 'application/json', 
           }, 
           body: JSON.stringify(this.state.credentials)
       })
       .then((response) => response.json())
       .then(jsonResponse => {
           if(jsonResponse.confirmation === "success"){
               this.props.navigation.navigate('main')
           } else {
               throw new Error(jsonResponse.message); 
           }
       })
       .catch(err => {
           alert(JSON.stringify(err.message)); 
       }); 
    }

    render() {
        return(
            <View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}> 
                <View style={styles.yourItemTop}>
                    <Text
                        style={{
                            textTransform: "uppercase",
                            fontWeight:"700"
                        }}
                    >My Account</Text>
                </View>
                <View style={{
                    justifyContent: "space-between", 
                    flexDirection: "row", 
                    padding: 20
                }}>
                    <View>
                        <Text
                            style={styles.yourItemName}
                        >Ehinomen Idialu </Text> 
                        <Text
                            style={styles.yourItemName}
                        >You have tracked</Text>
                    </View>
                    <View> 
                        <Text
                            style={{
                                fontSize: 35, 
                                fontWeight: "700",
                            }}
                        >333</Text>
                        <Text
                            style={{
                                fontStyle:"italic",
                                textAlign: "right", 
                            }}
                        >
                            Calories
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        alignItems: "center", 
                        justifyContent: "center",
                        height: 70, 
                        marginBottom: 20, 
                        borderBottomWidth: StyleSheet.hairlineWidth, 
                        borderBottomColor: 'rgb(233,233,233)',  
                    }}    
                >
                    <Button
                        title="LOG OUT"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "#000",
                            width: 345,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                        }}
                        onPress={() => {
                            this.login(); 
                        }}
                    /> 
                </View>
                <View 
                    style={styles.yourItems}
                >
                     <Text
                        style={{
                            paddingLeft: 18
                        }}
                     >Your Items</Text>
                    <SearchBar
                        placeholder='Search your items'
                        style={styles.searchbar}
                        containerStyle={styles.searchcontainer}
                        inputContainerStyle={{
                            backgroundColor: "#F2F0F0", 
                            height: 40, 
                            alignItems:"center", 
                        }}
                    /> 
                    <View>
                        <HomeFeed/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    yourItemTop: {
        width: 100 + "%", 
        height: 75,
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth, 
        borderBottomColor: 'rgb(233,233,233)',  
        justifyContent: "center", 
        alignItems: "center", 
        paddingTop: 30, 
        textTransform: "uppercase"
    },
    searchcontainer: {
        backgroundColor: '#fff',
        borderWidth: 0, //no effect
        shadowColor: 'white', //no effect
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        marginTop: 5
    }, 
    yourItemName: {
        fontSize: 25
    }, 
    yourItems: {
        width: 100 + "%", 
        height: 100 + "%"
    }
}); 

export default Home