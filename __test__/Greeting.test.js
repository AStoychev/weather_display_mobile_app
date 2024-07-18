import React from 'react';
import renderer from 'react-test-renderer';

import Greeting from '../components/Greeting';

describe('<Greeting />', () => {
    it('has 2 child', () => {
        const tree = renderer.create(<Greeting />).toJSON();
        expect(tree.children.length).toBe(2);
    });
});
