import React, {Component} from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity, TextInput,Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../config'

class Login extends Component {
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
                        marginTop: 200, 
                        alignItems: "center",
                    }}
                >
                    <Image 
                            style={{height: 100, width: 100}}
                            source={config.images.logo}
                        >
                    </Image>
                    <TextInput                  
                         value={this.state.email} 
                         placeholder="Email"
                         style={styles.input} 
                         autoCorrect={false}
                         autoCapitalize={false}
                         onChangeText={text => this.updateText(text, "email")}
                    />
                    <TextInput
                        value={this.state.password}
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize={false}
                        placeholder="Password" 
                        style={styles.input}
                        onChangeText={text => this.updateText(text, "password")}
                    />
                    <Button
                        title="LOGIN"
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={{
                            backgroundColor: "#000",
                            width: 300,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                        }}
                        onPress={() => {
                            this.login(); 
                        }}
                    />
                    <View
                        style={{
                            marginTop: 50, 
                            borderTopWidth: StyleSheet.hairlineWidth, 
                            width: 300, 
                            alignItems: "center",  
                        }}
                    >
                        <Text 
                            style={{
                                paddingTop:30,
                                fontSize:12
                            }}
                        >
                            Don't have an account ?
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('register') 
                            }}  
                        >
                            <Text 
                                style={{
                                    fontSize:12
                                }}
                            >Sign up today</Text>
                        </TouchableOpacity>
                    </View>
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
        marginBottom: 30,
        borderColor: "#000", 
        borderWidth: StyleSheet.hairlineWidth, 
    }
}); 

export default Login; 