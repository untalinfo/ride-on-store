import * as yup from 'yup';
import { personalDataFields } from '../constants/formFields';

const personalDataValidation = {
	[personalDataFields.FULL_NAME]: yup
		.string()
		.min(8, 'Full name must be at least 8 characters')
		.required('Full name is required'),
	[personalDataFields.EMAIL]: yup.string().email('Must be a valid email').required('Email is required'),
	[personalDataFields.PHONE]: yup
		.string()
		.min(10, 'Phone number must be at least 10 characters')
		.required('Phone number is required'),
};

const personalDataSchema = yup.object().shape(personalDataValidation);

export default personalDataSchema;
