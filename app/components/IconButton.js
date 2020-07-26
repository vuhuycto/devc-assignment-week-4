import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import defaultStyles from './../configs/styles';

function IconButton({
	name,
	style,
	backgroundColor = 'primary',
	color = 'white',
	size = 17,
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
			<MaterialCommunityIcons
				name={name}
				size={size}
				color={defaultStyles.colors[color]}
			/>
		</TouchableOpacity>
	);
}

IconButton.propTypes = {
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
	size: PropTypes.number,
	onPress: PropTypes.func,
};

export default IconButton;
