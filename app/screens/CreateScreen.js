import React, { useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
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

function CreateScreen({ navigation }) {
	const todoContext = useContext(TodoContext);

	const handleSubmit = ({ name, notes }, { resetForm }) => {
		todoContext.handleCreate({
			id: new Date().getUTCMilliseconds().toString(),
			name,
			notes,
			completed: false,
		});

		resetForm({ values: '' });
		Alert.alert('Create Todo Item', 'Success!', [
			{ text: 'OK', onPress: () => navigation.navigate('All') },
		]);
	};

	return (
		<Screen>
			<View style={styles.container}>
				<Form
					initialValues={{ name: '', notes: '' }}
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
					<FormSubmitButton title='Add' />
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

export default CreateScreen;
