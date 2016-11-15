import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';
import Button from 'react-native-button';
import {observer} from 'mobx-react/native';
import {Colors, History} from 'tools';

@observer
class Page1 extends Component {
  shouldComponentUpdate(){
    alert('!');
    return false;
  }

  render(){
    const store = this.props.store;
    return (<View>
      <TextInput 
        style={styles.input}
        onChangeText={(text) => {store.changeName(text);}}
        value={store.name}></TextInput>
      <Text style={styles.welcome}>
        Welcome {store.showName} to React Native Reactive!
      </Text>
      <Text>Counter: {store.counter}</Text>
      <Text>Total clicks: {store.total}</Text>
      <Button onPress={(e) => {e.persist(); store.increase()}}>+</Button>
      <Button onPress={(e) => {e.persist(); store.decrease()}}>-</Button>
      <Button onPress={(e) => {e.persist(); History.push('/page2');}}>sasas</Button>
    </View>);


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: 200,
    height: 30,
    margin: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft:10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Page1;
