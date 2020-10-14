import React from 'react';
import { View, Text } from 'react-native';

const FixedDimensionsBasics = () => {
    return (
      
      <View style={{flexDirection: "row", marginTop: 0,backgroundColor: 'blue'}} >
        <Text>test</Text>
        <Text style={{margin: 20,color: 'blue',fontWeight: 'bold',fontSize: 30}} />
        <Text>test</Text>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <Text>test</Text>
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <Text>test</Text>
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} /><
          Text>test</Text>
      </View>
    );

};

export default FixedDimensionsBasics;
