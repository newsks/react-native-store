import useGetInfinitePosts from '@/hooks/useGetInfinitePosts';
import React from 'react';
import {StyleSheet, View} from 'react-native';

function FeedList() {
  const {data: posts} = useGetInfinitePosts();
  return <View></View>;
}

const styles = StyleSheet.create({});

export default FeedList;
