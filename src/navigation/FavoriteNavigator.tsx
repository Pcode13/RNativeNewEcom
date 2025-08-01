import { createStackNavigator } from '@react-navigation/stack';

import SingleProduct from '../views/MainScreens/Home/SingleProduct';
import Favorite from '../views/MainScreens/Fav';
export type FavoriteNavigatorProps = {
  Favorite: undefined;
  SingleProduct: { id: number | string };
};

const FavoriteStack = createStackNavigator<FavoriteNavigatorProps>({
  screens: {
    Favorite,
    SingleProduct,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default FavoriteStack;
