import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import Screen from './Screen';
import FormSubmitButton from '../components/form/FormSubmitButton';
import FormTextField from '../components/form/FormTextField';
import Form from '../components/form/Form';
import TodoContext from './../context/todoContext';
import defaultStyles from './../configs/styles';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(1).label('Todo Name'),
	notes: Yup.string().max(250).label('Notes'),
});

function EditScreen({ navigation, route }) {
	const todoContext = useContext(TodoContext);
	const { name, notes } = route.params;

	const handleSubmit = (item) => {
		todoContext.handleUpdate({ id: route.params.id, ...item });

		Alert.alert('Update Todo Item', 'Success!', [
			{ text: 'OK', onPress: () => navigation.navigate('All') },
		]);
	};

	return (
		<Screen>
			<View style={styles.container}>
				<Form
					initialValues={{ name, notes }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<FormTextField
						name='name'
						placeholder='Todo'
						style={defaultStyles.titleFontSize}
					/>
					<FormTextField
						name='notes'
						placeholder='Notes'
						multiline
						numberOfLines={5}
					/>
					<FormSubmitButton title='Save' />
				</Form>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: -30,
		backgroundColor: defaultStyles.colors.white,
		width: '100%',
		paddingTop: 60,
	},
});

export default EditScreen;
