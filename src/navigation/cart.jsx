import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { Cart } from '../screens';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
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
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
