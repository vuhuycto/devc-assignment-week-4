import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import defaultStyles from './../../configs/styles';

function TodoContent({ title, isCompleted = false }) {
	return (
		<View style={styles.content}>
			<Text
				style={[
					defaultStyles.titleFontSize,
					isCompleted ? styles.dashedText : null,
				]}
			>
				{title}
			</Text>
		</View>
	);
}

TodoContent.propTypes = {
	isCompleted: PropTypes.bool,
};

const styles = StyleSheet.create({
	content: {
		height: defaultStyles.length,
		backgroundColor: defaultStyles.colors.white,
		justifyContent: 'center',
	},
	dashedText: {
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
	},
});

export default TodoContent;
