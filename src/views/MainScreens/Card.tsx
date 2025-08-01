import { useNavigation } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { useCart } from '../../context/CardProvider';
import IconButton from '../../components/IconButton';
import { FlashList } from '@shopify/flash-list';
import EmptyContainer from '../../components/EmptyContainer';
import { FormatPrice } from '../../constants/countryData';

interface Props {}

const Card: FC<Props> = () => {
  const cartContext = useCart();
  const navigation = useNavigation();
  const cartItemsCount = cartContext?.countAllItems();
  console.log('cartItem details', cartItemsCount, cartContext?.items);

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
      <View style={styles.headerContainer}>
        <IconButton iconName={'arrow-left'} style={styles.iconBtn} />
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.title}>My Shopping Cart</Text>
          <Text>Total Items {cartItemsCount}</Text>
        </View>
      </View>
      <FlashList
        ListEmptyComponent={<EmptyContainer text="No Items to Render..." />}
        contentContainerStyle={styles.listContainer}
        data={cartContext?.items}
        renderItem={({ item }) => {
          return (
            <View style={styles.productContainer}>
              <Image
                resizeMode="cover"
                source={{ uri: item.product.poster }}
                style={styles.productImage}
              />

              <View style={styles.productDetails}>
                <Text numberOfLines={1} style={styles.productTitle}>
                  {item.product.title}
                </Text>

                <View>
                  <Text style={styles.priceText}>
                    {FormatPrice(item.product.price.sale)} x {item.count}
                  </Text>
                  <Text style={styles.totalPriceText}>
                    {FormatPrice(item.product.price.sale * item.count)}
                  </Text>
                </View>

                <View style={styles.quantityControls}>
                  <Pressable
                    onPress={() => cartContext?.updateCart(item.product, -1)}
                    style={styles.actionButton}
                  >
                    <Text style={styles.textBase}>-</Text>
                  </Pressable>

                  <View style={[styles.actionButton, styles.qtyDisplay]}>
                    <Text style={styles.textBase}>{item.count}</Text>
                  </View>
                  <Pressable
                    onPress={() => cartContext?.updateCart(item.product, 1)}
                    style={styles.actionButton}
                  >
                    <Text style={styles.textBase}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }}
      />

      <View style={styles.footerContainer}>
        <Pressable onPress={cartContext?.clearCart}>
          <Text style={styles.clearCartText}>Clear Cart</Text>
        </Pressable>
        <View style={styles.totalTextWrapper}>
          <View style={styles.divider} />
          <Text style={styles.totalText}>
            Total: {FormatPrice(cartContext?.countTotalPrice() || 0)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  iconBtn: {
    borderRadius: 25,
  },

  headerContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    height: 50,
    justifyContent: 'space-between',
  },
  listContainer: {
    gap: 15,
    paddingBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productTitle: {
    fontWeight: '600',
  },
  priceText: {
    fontWeight: '500',
    color: 'gray',
  },
  totalPriceText: {
    fontWeight: '600',
    fontSize: 18,
  },
  productDetails: {
    flex: 1,
    gap: 5,
  },
  quantityControls: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  actionButton: {
    height: 40,
    minWidth: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyDisplay: {
    backgroundColor: '#FFA500',
  },
  textBase: {
    fontSize: 16,
  },
  footerContainer: {
    // alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  totalTextWrapper: {
    // flex: 1,
  },
  divider: {
    height: 2,
    backgroundColor: 'lightgray',
    marginTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  clearCartText: {
    fontSize: 18,
    paddingVertical: 10,
  },
});

export default Card;
