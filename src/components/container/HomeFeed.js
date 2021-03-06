import React, {Component} from 'react';
import {FlatList, ScrollView} from "react-native"; 
import { Food } from '../presentation';

const numColumns = 2; 

class HomeFeed extends Component {
    _renderFood({item}){
        return<Food item={item}/>; 
    }
    _returnKey(item){
        return item.toString(); 
    }
    render(){
        return <FlatList
            data={[ 1,2,3,]}
            keyExtractor={this._returnKey}
            renderItem={this._renderFood}
            numColumns={numColumns}
        />
    }
}

export default HomeFeed; 