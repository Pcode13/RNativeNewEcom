import React, { FC } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { FormatPrice } from '../../../../constants/countryData';

interface Props {}

const ProductPrice: FC<Props> = () => {
  return  <View style={styles.price}>
          <Text>Price :</Text>
          <Text style={styles.mrp}>{FormatPrice(product.price?.mrp)}</Text>
          <Text>{FormatPrice(product.price?.sale)}</Text>
        </View>
};

const styles = StyleSheet.create({
 container:{},
});

export default ProductPrice;