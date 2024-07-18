import { View } from 'react-native';

const mockIcon = (props) => <View {...props} />;

export const Ionicons = {
  name: 'Ionicons',
  defaultProps: {
    size: 30,
    color: '#999',
  },
  mockIcon,
};
