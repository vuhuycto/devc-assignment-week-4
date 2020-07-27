import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ActiveScreen from './../screens/ActiveScreen';
import EditScreen from '../screens/EditScreen';

const Stack = createStackNavigator();

const ActiveToEditNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name='Active' component={ActiveScreen} />
		<Stack.Screen
			name='Edit'
			component={EditScreen}
			options={{ headerShown: true }}
		/>
	</Stack.Navigator>
);

export default ActiveToEditNavigator;
