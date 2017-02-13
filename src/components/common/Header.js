import React from 'react';
import {Text,View} from 'react-native';

const Header = (props)=>{
	const {textStyle,viewStyle} = styles;

	return (
	<View style={viewStyle}>
		<Text style={textStyle}>{props.headerText}</Text>
	</View>
	);
};

const styles = {
	viewStyle:{
		backgroundColor: '#F5F5F5',
		justifyContent:'center',
		alignItems:'center',
		height:60,
		paddingTop:15,
		elevation:2,
		position:'relative'
	},
	textStyle:{
		fontSize:20
	}
};

export {Header};