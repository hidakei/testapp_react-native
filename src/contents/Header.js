import React from 'react';
import { 
  Text, 
  View } from 'react-native';
console.log("Header----------1");
const Header = (props) => {
  return (
    <View style={{
      backgroundColor: '#F800F8',
      justifyContent: 'center', 
      flexDirection: 'row',
      flex: 1,
      elevation: 2,
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: '600'
        }}>{props.showText}</Text>
    </View>
  );
};

export default Header;