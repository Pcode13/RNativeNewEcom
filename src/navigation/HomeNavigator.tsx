import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/MainScreens/Home/Home';
import SingleProduct from '../views/MainScreens/Home/SingleProduct';

export type HomeStackNavigatorProps = {
  Home: undefined;
  SingleProduct: { id: number | string };
};

const HomeStack = createStackNavigator<HomeStackNavigatorProps>({
  screens: {
    Home,
    SingleProduct,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default HomeStack;
