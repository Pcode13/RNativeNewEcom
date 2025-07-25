import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import AntDesign from '@react-native-vector-icons/ant-design';

import Home from '../views/MainScreens/Home';
import Card from '../views/MainScreens/Card';
import Profile from '../views/MainScreens/Profile';
import Fav from '../views/MainScreens/Fav';

const Tab = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />
        ),
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#000',
      },
    },
    Card: {
      screen: Card,
      options: {
        title: 'Cart',
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="shopping-cart" color={color} size={size} />
        ),
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#000',
      },
    },
    Profile: {
      screen: Fav,
      options: {
        title: 'Fav',
        tabBarLabel: 'Fav',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="heart" color={color} size={size} />
        ),
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#000',
      },
    },
    Fav: {
      screen: Profile,
      options: {
        title: 'Profile',
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" color={color} size={size} />
        ),
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#000',
      },
    },
  },
});

export const TabNavigator = createStaticNavigation(Tab);
