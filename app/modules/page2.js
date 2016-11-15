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

class Page2 extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>Just for test</Text>
				<Button onPress={(e) => {e.persist(); History.goBack()}}>back</Button>
			</View>
			)
	}
}

export default Page2;