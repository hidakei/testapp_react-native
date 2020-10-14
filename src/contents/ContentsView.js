import React from 'react';
import { 
  Text, 
  View } from 'react-native';

console.log("ContentsView----------1");

const ContentsView = (props) => {
  return (
    <View style={{
      backgroundColor: '#00F8F8',
      flex:17,
    }}>
      <Text>{props.showText}</Text>
    </View>
  );
};

const styles = {
  mView: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

console.log("ContentsView----------2");

export default ContentsView;