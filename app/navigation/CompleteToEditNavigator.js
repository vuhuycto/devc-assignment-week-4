import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EditScreen from '../screens/EditScreen';
import CompleteScreen from './../screens/CompleteScreen';

const Stack = createStackNavigator();

const CompleteToEditNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name='Completed' component={CompleteScreen} />
		<Stack.Screen name='Edit' component={EditScreen} options={{ headerShown: true }}/>
	</Stack.Navigator>
);

export default CompleteToEditNavigator;