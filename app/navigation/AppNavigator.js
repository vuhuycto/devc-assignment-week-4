import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CreateScreen from './../screens/CreateScreen';
import AllToEditNavigator from './AllToEditNavigator';
import CompleteToEditNavigator from './CompleteToEditNavigator';
import ActiveToEditNavigator from './ActiveToEditNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen
			name='All'
			component={AllToEditNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name='clipboard-text-outline'
						size={size}
						color={color}
					/>
				),
			}}
		/>
		<Tab.Screen
			name='Completed'
			component={CompleteToEditNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name='clipboard-check-outline'
						size={size}
						color={color}
					/>
				),
			}}
		/>
		<Tab.Screen
			name='Active'
			component={ActiveToEditNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name='clipboard-alert-outline'
						size={size}
						color={color}
					/>
				),
			}}
		/>
		<Tab.Screen
			name='Create'
			component={CreateScreen}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name='plus-circle-outline'
						size={size}
						color={color}
					/>
				),
			}}
		/>
	</Tab.Navigator>
);

export default AppNavigator;
