import FeedFavoriteList from '@/components/feed/FeedFavoriteList';
import {colors} from '@/constants';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function FeedFavoriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedFavoriteList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  text: {
    color: colors.BLACK,
  },
});

export default FeedFavoriteScreen;
