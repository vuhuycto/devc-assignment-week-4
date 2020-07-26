import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useFormikContext } from 'formik';

import defaultStyles from './../../configs/styles';

function FormTextInput({ style, name, ...otherProps }) {
	const { handleChange, values } = useFormikContext();

	return (
		<View style={styles.textInputContainer}>
			<TextInput
				value={values[name]}
				onChangeText={handleChange(name)}
				style={[styles.textInput, style]}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	textInputContainer: { flexDirection: 'row' },
	textInput: {
		borderWidth: 1,
		borderColor: defaultStyles.colors.light,
		borderRadius: 5,
		padding: 15,
		width: '95%',
		marginBottom: 15,
	},
});

export default FormTextInput;
