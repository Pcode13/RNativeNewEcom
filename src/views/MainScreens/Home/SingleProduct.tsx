import React, { FC, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  ViewToken,
} from 'react-native';
import { HomeStackNavigatorProps } from '../../../navigation/HomeNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import Client from '../../../apiServices/Client';
import { FlashList } from '@shopify/flash-list';

type Props = StackScreenProps<HomeStackNavigatorProps, 'SingleProduct'>;

type ProductDetail = {
  id: number;
  title: string;
  description: string;
  category: string;
  poster: string;
  price: {
    mrp: number;
    sale: number;
  };
  images: string[];
  bulletPoints: string[];
};
const { width } = Dimensions.get('screen');
const padding = 10;
const imageSize = width - 10 * 2;
const SingleProduct: FC<Props> = ({ route }) => {
  const [product, setProduct] = useState<ProductDetail>();
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number | null>(0);
  const productID = route.params.id;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await Client.get<{ product: ProductDetail | null }>(
          `/product/detail/${productID}`,
        );
        if (response.data.product) {
          setProduct(response.data.product);
        }
      } catch (error) {
        console.log('Fetch error:', error);
      }
    };
    fetchDetails();
  }, [productID]);

  //   const onViewableItemsChangeda = useRef(
  //     (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
  //       console.log(info);
  //     },
  //   );

  // const onViewableItemsChangeda = useRef(
  //   (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
  //     console.log('Viewable Items:', info.viewableItems);
  //     const activeIndex = info.viewableItems[0].index;
  //     console.log(activeIndex);
  //     if (activeIndex !== undefined && activeIndex !== null)
  //       setCurrentSlideIndex(activeIndex);
  //   },
  // );

  const onViewableItemsChanged = useRef(
    (info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      if (info.viewableItems.length > 0) {
        const activeIndex = info.viewableItems[0].index;
        console.log('Active index:', activeIndex);
        if (
          typeof activeIndex === 'number' &&
          activeIndex !== undefined &&
          activeIndex !== null
        ) {
          setCurrentSlideIndex(activeIndex);
        }
      }
    },
  );

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });

  if (!product)
    return (
      <View style={styles.noProduct}>
        <Text>No Product ...</Text>
      </View>
    );
  const images = [product.poster, ...product.images];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ marginTop: 16 }}>
        <FlashList
          data={images}
          estimatedItemSize={314}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => {
            return (
              <Image
                source={{ uri: item }}
                style={{
                  width: imageSize,
                  height: imageSize,
                  borderRadius: 9,
                  borderWidth: 1,
                }}
                resizeMode="cover"
              />
            );
          }}
          onViewableItemsChanged={onViewableItemsChanged.current}
          viewabilityConfig={viewabilityConfig.current}
        />

        <View style={styles.images}>
          {images.map((item, index) => {
            return (
              <Image
                key={item + index}
                source={{ uri: item }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 9,
                  borderWidth: 1,
                  transform: [{ scale: index === currentSlideIndex ? 1 : 0.5 }],
                }}
                resizeMode="cover"
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: padding,
    gap: 20,
  },
  images: {
    flexDirection: 'row',
    gap: 10,
    paddingTop: 10,
  },
  noProduct: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default SingleProduct;
