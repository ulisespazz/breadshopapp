import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { Categories, ProductDetail, Products } from '../screens/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          title: 'Categories',
          statusBarColor: THEME.colors.primary,
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
          statusBarColor: THEME.colors.primary,
          headerTintColor: THEME.colors.title,
          headerStyle: {
            backgroundColor: THEME.colors.background,
          },
          headerTitleStyle: {
            fontFamily: 'Bitter-SemiBold',
          },
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => ({
          title: route.params.title,
          statusBarColor: THEME.colors.primary,
          headerTintColor: THEME.colors.title,
          headerStyle: {
            backgroundColor: THEME.colors.background,
          },
          headerTitleStyle: {
            fontFamily: 'Bitter-SemiBold',
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
