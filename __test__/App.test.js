import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import store from '../redux/store';

jest.mock('@react-navigation/native');
jest.mock('@react-navigation/native-stack', () => ({
    createNativeStackNavigator: jest.fn(),
}));
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => jest.fn(),
    useSelector: () => jest.fn(),
}));

const Stack = jest.fn();

import App from '../App';

describe('App Component', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <NavigationContainer>
                        <StatusBar style="light" />
                        {Stack.mockImplementation(() => <></>)}
                    </NavigationContainer>
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});