import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Error from '../components/Error';

jest.mock('../components/CustomButton', () => {
    const React = require('react');
    const { TouchableOpacity, Text } = require('react-native');
    return ({ onHandlePress, text, fontSize, testID }) => (
        <TouchableOpacity onPress={onHandlePress} testID={testID}>
            <Text style={{ fontSize }}>{text}</Text>
        </TouchableOpacity>
    );
});

describe('Error Component', () => {
    it('renders correctly when modal is visible', () => {
        const tree = renderer.create(
            <Error modalVisible={true} onErrorMessageHandle={jest.fn()} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('does not render when modal is not visible', () => {
        const tree = renderer.create(
            <Error modalVisible={false} onErrorMessageHandle={jest.fn()} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('calls onErrorMessageHandle when OK button is pressed', () => {
        const mockHandleError = jest.fn();

        const component = renderer.create(
            <Error modalVisible={true} onErrorMessageHandle={mockHandleError} />
        );

        const root = component.root;
        const okButton = root.findByProps({ testID: 'ok-button' });

        act(() => {
            okButton.props.onHandlePress();
        });

        expect(mockHandleError).toHaveBeenCalled();
    });
});