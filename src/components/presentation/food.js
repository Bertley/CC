import React, {Component} from 'react'; 
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, StyleSheet, Tile } from 'react-native-elements'
import config from "../../config"
import Icon from 'react-native-vector-icons/FontAwesome';

class Food extends Component {

    render(){
        return(
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
        )
    }
}


export default Food