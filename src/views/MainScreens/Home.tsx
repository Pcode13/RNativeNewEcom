import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackNavigator } from '../../navigation/AuthNavigator';
import { useAuth } from '../../context/AuthProvider';
import Client from '../../apiServices/Client';
import { FlashList } from '@shopify/flash-list';

type Props = StackScreenProps<AuthStackNavigator, 'Home'>;
type Product = {
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

const Home: FC<Props> = ({}) => {
  // const authContext = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  // const { name, email } = route.params.data;
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await Client.get<{ products: Product[] }>(
          '/product/products',
        );
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <View style={styles.container}>
      <Text> Products</Text>
      <FlashList
        data={products}
        // keyExtractor={(product) => product.id.toString()}
        keyExtractor={product => product.id.toString()}
        renderItem={({ item: product }) => {
          return (
            <View>
              <Text>{product.title}</Text>
              <Text>{product.description}</Text>
              <Text>{product.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Home;
