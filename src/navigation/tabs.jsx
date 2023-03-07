import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import CartNavigator from './cart';
import OrdersNavigator from './orders';
import ShopNavigator from './shop';
import { THEME } from '../constants/theme';

const BottomTab = createBottomTabNavigator();
const tabs = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Bitter-Medium',
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: THEME.colors.primary,
        },
        tabBarActiveTintColor: THEME.colors.white,
        tabBarInactiveTintColor: THEME.colors.title,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={THEME.colors.white}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-full-outline'}
              size={22}
              color={THEME.colors.white}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'md-cart' : 'md-cart-outline'}
              size={22}
              color={THEME.colors.white}
            />
          ),
          tabBarBadge: cart.length,
          tabBarBadgeStyle: {
            backgroundColor: THEME.colors.background,
            color: THEME.colors.black,
            fontFamily: 'Bitter-Medium',
            fontSize: 11,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default tabs;
