import React from 'react';
import { 
  View, 
  Button } from 'react-native';
console.log("Footer----------1");
const Footer = (props) => {
  const {btView, btStyle} = styles;
  return (
    <View style={{
      backgroundColor: '#E8E800',
      flex: 2,
      elevation: 2,
    }}>
      <View style={{
        backgroundColor: '#F8F844',
        flex:1,
        flexDirection: 'row' 
        }}>
        <View style={btView}><Button title="bt1" style={btStyle} onPress={() => {console.log("1");}}/></View>
        <View style={btView}><Button title="bt2" style={btStyle} onPress={() => {console.log("2");}}/></View>
        <View style={btView}><Button title="bt3" style={btStyle} onPress={() => {console.log("3");}}/></View>
        <View style={btView}><Button title="bt4" style={btStyle} onPress={() => {console.log("4");}}/></View>
        <View style={btView}><Button title="bt5" style={btStyle} onPress={() => {console.log("5");}}/></View>
      </View>
    </View>
  );
};

const styles = {
  btView: {
    backgroundColor: 'transparent',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btStyle: {
    backgroundColor: '#F800F8',

  }
};

export default Footer;