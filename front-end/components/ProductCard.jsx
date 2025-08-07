import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import '../assets/HEART.png'; // Ensure this path is correct

const ProductCard = ({ imageSource, title, description, price, onAddToCart }) => {
  return (
    <View style={styles.card}>
      {/* Heart Icon */}
      <Image source={require('../assets/HEART.png')} style={styles.heartIcon} />

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      {/* Text Content */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Add to Cart Button + Price */}
      <TouchableOpacity style={styles.button} onPress={onAddToCart}>
        <Text style={styles.buttonText}>ADD TO CART</Text>
        <Text style={styles.price}>₱ {price}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFE5DC',
    borderRadius: 14,
    padding: 16,
    margin: 10,
    width: 280,
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  heartIcon: {
    width: 22,
    height: 22,
    position: 'absolute',
    top: 12,
    right: 12,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  productImage: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#A44A3F',
    textAlign: 'center',
    marginBottom: 4,
    fontFamily: 'serif',
  },
  description: {
    fontSize: 14,
    color: '#A44A3F',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#C46957',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  price: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 'auto',
  },
});

export default ProductCard;
