import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
// import { AuthStackNavigator } from '../../../navigation/AuthNavigator';

import Client from '../../../apiServices/Client';
import { FlashList } from '@shopify/flash-list';
import ProductCard, { offset } from '../../../components/ProductCard';
import { Product } from '../../../components/ProductCard';
import CategoryList from '../../../components/CategoryList';
import CategoryBtn from '../../../components/ CategoryBtn';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { HomeStackNavigatorProps } from '../../../navigation/HomeNavigator';

// type Props = StackScreenProps<AuthStackNavigator, 'Home'>;
// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   poster: string;
//   price: {
//     mrp: number;
//     sale: number;
//   };
// };

interface Props {}

const Home: FC<Props> = ({}) => {
  // const authContext = useAuth();
  const navigation = useNavigation<NavigationProp<HomeStackNavigatorProps>>();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await Client.get<{ products: Product[] }>(
          '/product/products',
        );
        // console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCategories = async () => {
      try {
        const { data } = await Client.get<{ categories: string[] }>(
          '/product/categories',
        );
        console.log(data);
        // setCategories(data.categories);
        setCategories(['All', ...data.categories]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
    fetchCategories();
  }, []);

  const handleOnCategorySelect = async (category: string) => {
    setSelectedCategory(category);
    // fetch products by category
    try {
      if (category === 'All') category = '';
      const { data } = await Client.get<{ products: Product[] }>(
        '/product/products/' + category,
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <CategoryList
          data={categories}
          renderItem={({ item }) => {
            return (
              <CategoryBtn
                active={selectedCategory === item}
                label={item}
                onPress={() => handleOnCategorySelect(item)}
              />
            );
          }}
        />
      </View>

      <FlashList
        data={products}
        estimatedItemSize={314}
        contentContainerStyle={styles.productContainer}
        // keyExtractor={(product) => product.id.toString()}
        keyExtractor={product => product.id.toString()}
        renderItem={({ item: product }) => {
          return (
            <ProductCard
              product={product}
              onPress={() =>
                navigation.navigate('SingleProduct', { id: product.id })
              }
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: offset }} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  productContainer: {
    paddingHorizontal: offset,
    // gap: 10,
  },
});

export default Home;
