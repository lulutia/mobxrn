import React, {Component} from 'react';
import {View, AppRegistry, StatusBar} from 'react-native';
import {useStrict} from 'mobx';
import {observer} from 'mobx-react/native';
import {CStyle} from 'common';
import {Colors, Router, History} from 'tools';
useStrict(true);

// view and model for Counter scene
//import Counter from './modules/main';
import store from './data';
import createHistory from 'history/createMemoryHistory';

History.listen((location, action) => { 
  store.changePath(location.pathname);
})

export default class Example extends Component {
  render(){
    return (
      <View style={CStyle.flex}>
        <StatusBar
              backgroundColor={Colors.blue}
              barStyle="light-content"
          />
          <Router store={store}/>
      </View>)
  }
}
