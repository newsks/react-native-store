import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {FeedStackParamList} from '@/navigations/stack/FeedStackNavigator';
import {feedNavigation} from '@/constants';
import PostForm from '@/components/post/PostForm';

type EditPostScreenProps = StackScreenProps<
  FeedStackParamList,
  typeof feedNavigation.EDIT_POST
>;

function EditPostScreen({route}: EditPostScreenProps) {
  const {location} = route.params;

  return <PostForm location={location} isEdit />;
}

export default EditPostScreen;
