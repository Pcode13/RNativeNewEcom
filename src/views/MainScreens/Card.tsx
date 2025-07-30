import { useNavigation } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useCart } from '../../context/CardProvider';

interface Props {}

const Card: FC<Props> = () => {
  const cartContext = useCart();
  const navigation = useNavigation();
  const cartItemsCount = cartContext?.countAllItems();
  
  useEffect(() => {
    let tabBarBadge: string | undefined = undefined;
    if (cartItemsCount)
      tabBarBadge = cartItemsCount <= 9 ? cartItemsCount.toString() : '9+';
    navigation.setOptions({
      tabBarBadge,
    });
  }, [navigation, cartItemsCount]);
  return (
    <View style={styles.container}>
      <Text> Hello Typescript Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Card;
