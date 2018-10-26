import React, {Component} from 'react'; 
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../config' 

class Register extends Component {
    constructor(){
        super(); 
        this.state = {
            credentials: {
                email: "", 
                password: "", 
                firstName: "", 
                lastName: "", 
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

    Register() {
        if(this.state.credentials.email == "" || this.state.credentials.password == ""|| this.state.credentials.firstName == ""){
            alert("Please fill the blank inputs")
        } else {
            return fetch(config.baseUrl + 'signup', {
            method: 'POST', 
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify(this.state.credentials)
            })
            .then((response) => response.json())
            .then(jsonResponse => {
                    console.log(jsonResponse); 
                if(jsonResponse.confirmation === "success"){
                    this.props.navigation.navigate('main')
                } else {
                    throw new Error({
                        message: "Sorry, something went wrong; please try again"
                    }); 
                }
            })
            .catch(err => {
                alert(err.message); 
            }); 
        }
    }
    render(){
        return (
            <View style={{
                    height: 100 + "%", 
                    width: 100 + "%", 
                    flex: 1, 
                    alignItems: "center",
                    backgroundColor: "#fff"
            }}>
                <View
                    style={{
                        marginTop: 30, 
                        alignItems: "center",
                        width: 300, 
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18, 
                            alignItems: "center",
                            textAlign:"center",  
                            fontWeight: "600", 
                            letterSpacing: 2,
                            paddingBottom: 50, 
                        }}
                    >
                    SIGN UP USING YOUR EMAIL ADDRESS</Text>
                    <TextInput                  
                         value={this.state.email} 
                         placeholder="Email"
                         style={styles.input} 
                         autoCorrect={false}
                         autoCapitalize={false}
                         onChangeText={text => this.updateText(text, "email")}
                    />
                    <TextInput                  
                         value={this.state.firstname} 
                         placeholder="First Name"
                         style={styles.input} 
                         autoCorrect={false}
                         autoCapitalize={false}
                         onChangeText={text => this.updateText(text, "firstName")}
                    />
                    <TextInput                  
                         value={this.state.lastname} 
                         placeholder="Last Name"
                         style={styles.input} 
                         autoCorrect={false}
                         autoCapitalize={false}
                         onChangeText={text => this.updateText(text, "lastName")}
                    />
                    <TextInput
                        value={this.state.username}
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize={false}
                        placeholder="Password" 
                        style={styles.input}
                        onChangeText={text => this.updateText(text, "password")}
                    />
                    <Button
                        title="REGISTER"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "#000",
                            width: 300,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                        }}
                        onPress={() => {
                            this.Register(); 
                        }}
                    />
                </View>
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50, 
        width: 300,
        backgroundColor: "#fff",
        paddingRight: 20, 
        paddingLeft: 20, 
        marginBottom: 40,
        borderColor: "#000", 
        borderWidth: StyleSheet.hairlineWidth, 
    }
}); 

export default Register; 