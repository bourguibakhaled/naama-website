import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import OfferCard from '../../components/OfferCard';

// Sample data - replace with API call later
const SAMPLE_OFFERS = [
  {
    id: '1',
    storeName: 'Green Leaf Cafe',
    title: 'Surprise Bag - Bakery Items',
    price: 4.99,
    originalPrice: 15.00,
    discount: 67,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    pickupTime: '8:00 PM - 9:00 PM',
    quantityLeft: 3,
    isHighlighted: true,
  },
  {
    id: '2',
    storeName: 'Pizza Paradise',
    title: 'End of Day Pizza Box',
    price: 5.99,
    originalPrice: 18.00,
    discount: 67,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400',
    pickupTime: '9:00 PM - 10:00 PM',
    quantityLeft: 5,
    isHighlighted: true,
  },
  {
    id: '3',
    storeName: 'Fresh Market',
    title: 'Fresh Produce Mix',
    price: 3.99,
    originalPrice: 12.00,
    discount: 67,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
    pickupTime: '7:00 PM - 8:00 PM',
    quantityLeft: 8,
    isHighlighted: true,
  },
  {
    id: '4',
    storeName: 'Sushi Station',
    title: 'Sushi Surprise Box',
    price: 7.99,
    originalPrice: 24.00,
    discount: 67,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',
    pickupTime: '8:30 PM - 9:30 PM',
    quantityLeft: 2,
    isSpecial: true,
  },
  {
    id: '5',
    storeName: 'Healthy Bites',
    title: 'Salad & Sandwich Combo',
    price: 4.49,
    originalPrice: 13.50,
    discount: 67,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    pickupTime: '6:00 PM - 7:00 PM',
    quantityLeft: 6,
    isSpecial: true,
  },
];

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [offers, setOffers] = useState(SAMPLE_OFFERS);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const highlightedOffers = offers.filter((offer) => offer.isHighlighted);
  const specialOffers = offers.filter((offer) => offer.isSpecial);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Save Food, Save Money 🌱</Text>
          <Text style={styles.subtitle}>Find amazing deals near you</Text>
        </View>
        <TouchableOpacity style={styles.locationButton}>
          <Ionicons name="location" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[colors.primary]} />
        }
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for food, restaurants..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={colors.textSecondary}
          />
          <TouchableOpacity>
            <Ionicons name="options-outline" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Stats Card */}
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>247</Text>
            <Text style={styles.statLabel}>Meals Saved</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>$1,234</Text>
            <Text style={styles.statLabel}>Money Saved</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156kg</Text>
            <Text style={styles.statLabel}>CO₂ Saved</Text>
          </View>
        </View>

        {/* Hot Deals */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>🔥 Hot Deals</Text>
            <Text style={styles.sectionSubtitle}>Limited time offers</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {highlightedOffers.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                onPress={() => console.log('Offer pressed:', offer.id)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Today's Specials */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>⭐ Today's Specials</Text>
              <Text style={styles.sectionSubtitle}>Handpicked for you</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          {specialOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              horizontal
              onPress={() => console.log('Offer pressed:', offer.id)}
            />
          ))}
        </View>

        {/* Impact Section */}
        <View style={styles.impactSection}>
          <Text style={styles.impactTitle}>Your Environmental Impact</Text>
          <Text style={styles.impactText}>
            By saving food, you're helping reduce waste and protect our planet. Keep it up! 🌍
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 24,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  locationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 12,
    margin: 20,
    marginTop: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 16,
    color: colors.text,
  },
  statsCard: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: colors.border,
    marginHorizontal: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  seeAll: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  impactSection: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 32,
  },
  impactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  impactText: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 20,
  },
});
