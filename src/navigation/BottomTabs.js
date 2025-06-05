// navigation/BottomTabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {
  ChartAreaIcon,
  Home,
  HomeIcon,
  PowerOffIcon,
  User,
} from 'lucide-react-native'; // 👈 Lucide icons

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12},
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          } else if (route.name === 'Profile') {
            return <User color={color} size={size} />; // ✅ Using User icon for Profile
          }
          return null; // ✅ Fallback
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
