/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import mobrx from './app/main';
import React, {Component} from 'react';
import {View, AppRegistry} from 'react-native';
import {useStrict} from 'mobx';
import {observer} from 'mobx-react/native';
useStrict(true);

// view and model for Counter scene
import Counter from './app/main';
import store from './app/data';


export default class Example extends Component {
  render(){
    return <Counter store={store}/>
  }
}

AppRegistry.registerComponent('mobxrn', () => Example);
