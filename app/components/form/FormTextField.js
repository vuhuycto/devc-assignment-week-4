import React from 'react';
import { useFormikContext } from 'formik';

import FormErrorMessage from './FormErrorMessage';
import FormTextInput from './FormTextInput';

function FormTextField({ name, ...otherProps }) {
	const { errors } = useFormikContext();

	return (
		<>
			{errors[name] ? <FormErrorMessage name={name} /> : null}
			<FormTextInput
				name={name}
				{...otherProps}
			/>
		</>
	);
}

export default FormTextField;
