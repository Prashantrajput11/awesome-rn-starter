import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import {useAuthStore} from '../stores/authStore';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNavigator from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  // const token = useAuthStore(state => state.token);
  const token = true;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        {token ? (
          <Stack.Screen name="Main" component={BottomTabNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
