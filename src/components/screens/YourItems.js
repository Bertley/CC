import React, {Component} from 'react'; 
import {View, Text, TouchableOpacity } from 'react-native'; 

class YourItems extends Component {
    login() {
        // Navigate to the Main page
        this.props.navigation.navigate("main")
    }
    render(){
        return (
            <TouchableOpacity
                style={{
                    height: 100 + "%", 
                    width: 100 + "%", 
                    flex: 1, 
                    justifyContent: "center", 
                    alignItems: "center", 
                }}
                onPress={() => {
                    this.login(); 
                }}
            >
                <Text>Your Items</Text>
            </TouchableOpacity>
        ); 
    }
}

export default YourItems; 