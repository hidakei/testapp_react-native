/**
 * @format
 */

import React from 'react';
import { 
  View } from 'react-native';

import Header from './contents/Header';
import Contents from './contents/ContentsView';
import Footer from './contents/Footer';
console.log("MainView----------1");
const MainView = (props) => {
  return (
    <View style={{
      backgroundColor: '#F8F8F8',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }}>
      <Header showText = {props.showText} />
      <Contents showText = {props.showText} />
      <Footer showText = {props.showText} />
    </View>
  );
};console.log("MainView----------2");

export default MainView;