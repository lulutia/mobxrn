import React, {Component} from 'react';
import {View} from 'react-native';
import {CStyle} from 'common';
import {Colors, History} from 'tools';
import {routes} from 'modules';
import {observer} from 'mobx-react/native';


//const currentLocation = History.location;
const urlMap = [];
for(let i of routes) {
	urlMap.push(i.path);
}

@observer
export default class Router extends Component {
	constructor(props) {
	  super(props);
	}

	render(){
		const store = this.props.store;
		return (
			<View>
				<View style={[CStyle.flex, {height: 30, backgroundColor: Colors.blue}]} />
				{renderComponent(store)}
			</View>
			)
	}
}

function renderComponent(store) {
	let path = store.currentLocation;
	let index = urlMap.indexOf(path);
	let _component = routes[index].action();
	if (index !== -1) {
		return (
			<_component store={store}/>
			)
	}

}


