import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ActiveScreen from './../screens/ActiveScreen';
import AllScreen from './../screens/AllScreen';
import CompleteScreen from './../screens/CompleteScreen';
import CreateScreen from './../screens/CreateScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen
			name='All'
			component={AllScreen}
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
			component={CompleteScreen}
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
			component={ActiveScreen}
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
