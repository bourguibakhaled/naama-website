import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function OfferCard({ offer, horizontal = false, onPress }) {
  if (horizontal) {
    return (
      <TouchableOpacity style={styles.horizontalCard} onPress={onPress}>
        <Image source={{ uri: offer.image }} style={styles.horizontalImage} />
        <View style={styles.horizontalContent}>
          <Text style={styles.storeName}>{offer.storeName}</Text>
          <Text style={styles.offerTitle} numberOfLines={1}>
            {offer.title}
          </Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>${offer.price}</Text>
            <Text style={styles.originalPrice}>${offer.originalPrice}</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Ionicons name="time-outline" size={14} color={colors.textSecondary} />
              <Text style={styles.infoText}>{offer.pickupTime}</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="cube-outline" size={14} color={colors.textSecondary} />
              <Text style={styles.infoText}>{offer.quantityLeft} left</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: offer.image }} style={styles.image} />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>-{offer.discount}%</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.storeName}>{offer.storeName}</Text>
        <Text style={styles.offerTitle} numberOfLines={2}>
          {offer.title}
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${offer.price}</Text>
          <Text style={styles.originalPrice}>${offer.originalPrice}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={14} color={colors.textSecondary} />
            <Text style={styles.infoText}>{offer.pickupTime}</Text>
          </View>
          <Text style={styles.quantityText}>{offer.quantityLeft} left</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    marginLeft: 20,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: colors.border,
  },
  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    padding: 12,
  },
  storeName: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  quantityText: {
    fontSize: 12,
    color: colors.warning,
    fontWeight: '600',
  },
  horizontalCard: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  horizontalImage: {
    width: 120,
    height: 120,
    backgroundColor: colors.border,
  },
  horizontalContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
});
