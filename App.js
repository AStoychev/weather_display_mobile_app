import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartPage from './screens/StartPage';
import Home from './screens/Home';

import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName='StartPage'>

                    <Stack.Screen name='StartPage' component={StartPage} />
                    <Stack.Screen name='Home' component={Home} />

                </Stack.Navigator>
            </NavigationContainer>
            </Provider>
        </>
    );
}
