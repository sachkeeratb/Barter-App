import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';

export const AppStackNavigator = createStackNavigator(
	{
		BarterList: {
			screen: HomeScreen,
			navigationOptions: {
				headerShown: false
			}
		},

		ReceiverDetails: {
			screen: ReceiverDetailsScreen,
			navigationOptions: {
				headerShown: false
			}
		}
	},
	{
		initialRouteName: 'BarterList'
	}
);
