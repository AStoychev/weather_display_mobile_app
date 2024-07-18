import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { LinearGradient } from 'expo-linear-gradient';
import GradientBackground from '../components/GradientBackground';
import { GlobalStyles } from '../constants/styles';

jest.mock('../constants/styles', () => ({
  GlobalStyles: {
    linearGradient: ['#4c669f', '#3b5998', '#192f6a'],
  },
}));

describe('<GradientBackground />', () => {
  it('renders correctly with children', () => {
    const child = <Text>Test Child</Text>;
    const tree = renderer.create(<GradientBackground>{child}</GradientBackground>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('uses the correct gradient colors and style', () => {
    const component = renderer.create(<GradientBackground><Text>Test Child</Text></GradientBackground>);
    const instance = component.root;
    const linearGradient = instance.findByType(LinearGradient);

    expect(linearGradient.props.colors).toEqual(GlobalStyles.linearGradient);
    expect(linearGradient.props.style).toEqual({ flex: 1 });
  });
});
