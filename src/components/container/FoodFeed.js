import React, {Component} from 'react';
import {FlatList} from "react-native"; 
import { Food } from '../presentation';

const numColumns = 2; 
class FoodFeed extends Component {
    _renderFood({item}){
        return<Food item={item}/>; 
    }
    _returnKey(item){
        return item.toString(); 
    }
    render(){
        return <FlatList
            data={[ 1,2,3,4,5,6]}
            keyExtractor={this._returnKey}
            renderItem={this._renderFood}
            numColumns={numColumns}
        />;
    }
}

export default FoodFeed; 