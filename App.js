import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from "./screens/HomeScreen";
import Discover from './screens/Discover';
import ItemScreen from './screens/ItemScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
export default function App() {

 const Stack=createNativeStackNavigator();

  return (
    <TailwindProvider>
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name='Home' component={Homescreen}/>
      <Stack.Screen name='Discover' component={Discover}/>
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      
    </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
  );
}