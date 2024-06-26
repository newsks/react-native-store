import {colors, feedNavigation} from '@/constants';
import {FeedStackParamList} from '@/navigations/stack/FeedStackNavigator';
import {ImageUri} from '@/types/domain';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PreviewImageListProps {
  imageUris: ImageUri[];
  onDelete?: (uri: string) => void;
  onChangeOrder?: (fromIndex: number, toIndex: number) => void;
  showOptions?: boolean;
  zoomEnable?: boolean;
}

function PreviewImageList({
  imageUris,
  onDelete,
  onChangeOrder,
  showOptions = false,
  zoomEnable = false,
}: PreviewImageListProps) {
  const navigation = useNavigation<NavigationProp<FeedStackParamList>>();
  const handlePressImage = (index: number) => {
    if (zoomEnable) {
      navigation.navigate(feedNavigation.IMAGE_ZOOM, {
        index,
      });
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {imageUris.map(({uri}, index) => {
          return (
            <Pressable key={index} onPress={() => handlePressImage(index)}>
              <Image
                resizeMode="cover"
                source={{
                  uri: `${
                    Platform.OS === 'ios'
                      ? 'http://localhost:3030/'
                      : 'http://192.168.219.104:3030/'
                  }${uri}`,
                }}
                style={styles.image}
              />

              {showOptions && (
                <>
                  <Pressable
                    style={[styles.imageButton, styles.deleteButton]}
                    onPress={() => onDelete && onDelete(uri)}>
                    <Ionicons name="close" size={16} color={colors.WHITE} />
                  </Pressable>

                  {index > 0 && (
                    <Pressable
                      style={[styles.imageButton, styles.moveLeftButton]}
                      onPress={() =>
                        onChangeOrder && onChangeOrder(index, index - 1)
                      }>
                      <Ionicons
                        name="arrow-back-outline"
                        size={16}
                        color={colors.WHITE}
                      />
                    </Pressable>
                  )}

                  {index < imageUris.length - 1 && (
                    <Pressable
                      style={[styles.imageButton, styles.moveRightButton]}
                      onPress={() =>
                        onChangeOrder && onChangeOrder(index, index + 1)
                      }>
                      <Ionicons
                        name="arrow-forward-outline"
                        size={16}
                        color={colors.WHITE}
                      />
                    </Pressable>
                  )}
                </>
              )}
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
  },
  imageContainer: {},
  image: {
    width: 70,
    height: '100%',
  },
  imageButton: {
    position: 'absolute',
    backgroundColor: colors.BLACK,
    zIndex: 1,
  },
  deleteButton: {
    top: 0,
    right: 0,
  },
  moveLeftButton: {
    bottom: 0,
    left: 0,
  },
  moveRightButton: {
    bottom: 0,
    right: 0,
  },
});

export default PreviewImageList;
