import React from 'react';
import renderer, { act } from 'react-test-renderer';
import CustomButton from '../components/CustomButton';
import { Text, TouchableOpacity } from 'react-native';

describe('CustomButton Component', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<CustomButton onHandlePress={() => { }} text="Press Me" fontSize={16} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('calls onHandlePress when button is pressed', () => {
        const mockHandlePress = jest.fn();
        const component = renderer.create(
            <CustomButton onHandlePress={mockHandlePress} text="Press Me" fontSize={16} />
        );
        const instance = component.root;

        const touchableOpacity = instance.findByType(TouchableOpacity);

        act(() => {
            touchableOpacity.props.onPress();
        });

        expect(mockHandlePress).toHaveBeenCalled();
    });
});
