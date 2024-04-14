import React from 'react';
import {mapNavigation} from '@/constants';
import {MapStackParamList} from '@/navigations/stack/MapStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';

import PostForm from '@/components/post/PostForm';

type AddPostScreenProps = StackScreenProps<
  MapStackParamList,
  typeof mapNavigation.ADD_POST
>;

function AddPostScreen({route}: AddPostScreenProps) {
  const {location} = route.params;

  return <PostForm location={location} />;
}

export default AddPostScreen;
