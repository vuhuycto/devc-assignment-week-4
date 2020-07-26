import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import defaultStyles from './../configs/styles';

function TextButton({
	title,
	style,
	backgroundColor = 'primary',
	color = 'white',
	onPress,
}) {
	return (
		<TouchableOpacity
			style={[
				style,
				{ backgroundColor: defaultStyles.colors[backgroundColor] },
			]}
			onPress={onPress}
		>
			<Text style={{ color: defaultStyles.colors[color] }}>{title}</Text>
		</TouchableOpacity>
	);
}

TextButton.propTypes = {
	backgroundColor: PropTypes.oneOf([
		'primary',
		'secondary',
		'tertiary',
		'grey',
		'white',
		'black',
		'danger',
		'medium',
		'active',
		'light',
		'dark',
	]),
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'tertiary',
		'grey',
		'white',
		'black',
		'danger',
		'active',
		'light',
		'dark',
	]),
	style: PropTypes.object,
	onPress: PropTypes.func,
};

export default TextButton;
