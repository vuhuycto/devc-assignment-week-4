import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import TextButton from './../TextButton';

function FormSubmitButton({ title }) {
	const { handleSubmit } = useFormikContext();

	return (
		<TextButton title={title} style={styles.button} onPress={handleSubmit} />
	);
}

const styles = StyleSheet.create({
	button: {
		padding: 10,
		borderRadius: 50,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FormSubmitButton;
