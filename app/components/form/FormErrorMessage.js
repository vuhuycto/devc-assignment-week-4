import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFormikContext } from 'formik';

import defaultStyles from './../../configs/styles';

function FormErrorMessage({ name }) {
	const { errors } = useFormikContext();

	return (
		<View style={styles.container}>
			<Text style={styles.warning}>{errors[name]}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '95%',
	},
	warning: {
		paddingBottom: 10,
		color: defaultStyles.colors.danger,
	},
});

export default FormErrorMessage;
