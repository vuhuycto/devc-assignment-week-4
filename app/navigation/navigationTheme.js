import { DefaultTheme } from '@react-navigation/native';

import defaultStyles from './../configs/styles';

export default {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: defaultStyles.colors.primary,
		// background: defaultStyles.colors.white,
	},
};
