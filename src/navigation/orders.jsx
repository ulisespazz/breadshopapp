import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { Orders } from '../screens';

const Stack = createNativeStackNavigator();

const OdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        statusBarColor: THEME.colors.primary,
        headerStyle: {
          backgroundColor: THEME.colors.background,
        },
        headerTintColor: THEME.colors.primary,
        headerTitleStyle: {
          fontFamily: 'Bitter-SemiBold',
          fontSize: 18,
          color: THEME.colors.title,
        },
      }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OdersNavigator;
