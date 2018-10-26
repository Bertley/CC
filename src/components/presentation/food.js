import React, {Component} from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 


class Food extends Component {

    render(){
        return(
            <View style={styles.foodCard}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    foodCard:{
        width: 48 + '%', 
        backgroundColor: "#000", 
        height: 250, 
        marginRight: 1 + "%", 
        marginLeft: 1 + "%", 
        marginTop: 5,
    }
});

export default Food