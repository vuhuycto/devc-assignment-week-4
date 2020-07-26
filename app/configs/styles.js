import { StyleSheet } from 'react-native';

const length = 70;

const styles = StyleSheet.create({
	action: {
		width: length,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	titleFontSize: {
		fontSize: 20,
		fontWeight: '500',
	},
});

export default {
	colors: {
		primary: '#6264f5',
		tertiary: '#fc5c65',
		secondary: '#4ecdc4',
		black: '#000',
		white: '#fff',
		medium: '#6e6969',
		light: '#f8f4f4',
		dark: '#0c0c0c',
		danger: '#ff5252',
		active: '#f79a0f',
	},
	iconSize: 30,
	length,
	...styles,
};
