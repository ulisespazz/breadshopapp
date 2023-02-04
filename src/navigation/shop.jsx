import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../constants/theme';
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
          statusBarColor: theme.colors.primary,
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: 'Products',
          statusBarColor: theme.colors.primary,
          headerTintColor: theme.colors.title,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTitleStyle: {
            fontFamily: 'Bitter-SemiBold',
          },
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'Product Detail',
          statusBarColor: theme.colors.primary,
          headerTintColor: theme.colors.title,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTitleStyle: {
            fontFamily: 'Bitter-SemiBold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
