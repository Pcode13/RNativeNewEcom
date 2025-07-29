import React, { FC } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, Pressable } from 'react-native';
import { FormatPrice } from '../constants/countryData';
export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  poster: string;
  price: {
    mrp: number;
    sale: number;
  };
};

interface Props {
  product: Product;
  onPress(): void
}
const { width } = Dimensions.get('screen');
export const offset = 10;

const ProductCard: FC<Props> = ({ product,onPress }) => {
  const imageWidth = width - offset * 4;
  const imageHeight = (imageWidth * 9) / 16;
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{ uri: product?.poster }}
        style={{ width: imageWidth, height: imageHeight, borderWidth: 1 }}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <View style={styles.price}>
        <Text>Price :</Text>
        <Text style={styles.mrp}>{FormatPrice(product.price?.mrp)}</Text>
        <Text>{FormatPrice(product.price?.sale)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
    borderRadius: 20,
    gap: 5,
    padding: offset,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  desTxt: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  price: {
    flexDirection: 'row',
    gap: 10,
    // justifyContent: 'space-around',
  },
  mrp: {
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  },
});

export default ProductCard;
