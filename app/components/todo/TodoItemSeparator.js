import React from 'react';
import { View, StyleSheet } from 'react-native';

import defaultStyles from './../../configs/styles';

function TodoItemSeparator(props) {
	return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
	separator: {
		width: '100%',
		height: 1,
		backgroundColor: defaultStyles.colors.light,
	},
});

export default TodoItemSeparator;
