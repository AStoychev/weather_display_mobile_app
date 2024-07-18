import React from 'react';
import renderer from 'react-test-renderer';
import LoadingOverlay from '../components/LoadingOverlay';

describe('LoadingOverlay Component', () => {
    it('renders correctly with given message and color', () => {
        const tree = renderer.create(
            <LoadingOverlay message="Loading..." color="blue" />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with different message and color', () => {
        const tree = renderer.create(
            <LoadingOverlay message="Please wait" color="red" />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
