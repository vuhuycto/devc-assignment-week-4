import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AllScreen from './../screens/AllScreen';
import EditScreen from '../screens/EditScreen';

const Stack = createStackNavigator();

const AllToEditNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name='All' component={AllScreen} />
		<Stack.Screen
			name='Edit'
			component={EditScreen}
			options={{ headerShown: true }}
		/>
	</Stack.Navigator>
);

export default AllToEditNavigator;
