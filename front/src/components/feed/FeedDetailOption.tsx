import React from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {CompoundOption} from '../common/CompoundOption';
import useMutateDeletePost from '@/hooks/queries/useMutateDeletePost';
import useDetailStore from '@/store/useDetailPostStore';
import {FeedStackParamList} from '@/navigations/stack/FeedStackNavigator';
import {alert} from '@/constants';

interface FeedDetailOptionProps {
  isVisible: boolean;
  hideOption: () => void;
}

function FeedDetailOption({isVisible, hideOption}: FeedDetailOptionProps) {
  const navigation = useNavigation<StackNavigationProp<FeedStackParamList>>();
  const deletePost = useMutateDeletePost();
  const {detailPost} = useDetailStore();

  const handleDeletePost = () => {
    if (!detailPost) {
      return;
    }

    Alert.alert(alert.DELETE_POST.TITLE, alert.DELETE_POST.DESCRIPTION, [
      {
        text: '삭제',
        onPress: () => {
          deletePost.mutate(detailPost.id, {
            onSuccess: () => {
              hideOption();
              navigation.goBack();
            },
          });
        },
        style: 'destructive',
      },
      {
        text: '취소',
        style: 'cancel',
      },
    ]);
  };
  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.Background>
        <CompoundOption.Container>
          <CompoundOption.Button isDanger onPress={handleDeletePost}>
            삭제하기
          </CompoundOption.Button>
          <CompoundOption.Divider />
          <CompoundOption.Button>수정하기</CompoundOption.Button>
        </CompoundOption.Container>
        <CompoundOption.Container>
          <CompoundOption.Button onPress={hideOption}>
            취소하기
          </CompoundOption.Button>
        </CompoundOption.Container>
      </CompoundOption.Background>
    </CompoundOption>
  );
}

export default FeedDetailOption;
