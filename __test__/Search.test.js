import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import renderer, { act } from 'react-test-renderer';
import { useDispatch } from 'react-redux';
import { setCity } from '../redux/slices/citySlice';
import Search from '../components/Search';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}));

jest.mock('@expo/vector-icons', () => ({
    Ionicons: 'Ionicons',
}));

describe('Search Component', () => {
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Search onHandlePress={jest.fn()} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('calls onHandlePress and dispatches setCity when search button is pressed', () => {
        const mockHandlePress = jest.fn();
        const component = renderer.create(<Search onHandlePress={mockHandlePress} />);
        const instance = component.root;

        const textInput = instance.findByType('TextInput');
        act(() => {
            textInput.props.onChangeText('New York');
        });

        component.update(<Search onHandlePress={mockHandlePress} />);

        const touchableOpacity = instance.findByType(TouchableOpacity);
        act(() => {
            touchableOpacity.props.onPress();
        });

        expect(mockDispatch).toHaveBeenCalledWith(setCity('New York'));
        expect(mockHandlePress).toHaveBeenCalledWith('New York');
    });
});
