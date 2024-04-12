import {colors} from '@/constants';
import useAuth from '@/hooks/queries/useAuth';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Pressable} from 'react-native';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const profileImg = require('@/assets/user-default.png');

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const {logoutMutation, getProfileQuery} = useAuth();
  const {email, nickname, imageUri, kakaoImageUri} = getProfileQuery.data || {};

  const handleLogout = () => {
    logoutMutation.mutate(null);
  };
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userImageContainer}>
            {imageUri === null && kakaoImageUri === null && (
              <Image source={profileImg} style={styles.userImage} />
            )}
            {imageUri === null && !!kakaoImageUri && (
              <Image source={{uri: kakaoImageUri}} style={styles.userImage} />
            )}
            {imageUri !== null && (
              <Image source={{uri: imageUri}} style={styles.userImage} />
            )}
          </View>
          <Text style={styles.nameText}>{nickname ?? email}</Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Pressable
        onPress={handleLogout}
        style={{alignItems: 'flex-end', padding: 10}}>
        <Text style={styles.nameText}>로그아웃</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: colors.WHITE,
    width: '100%',

    justifyContent: 'center',
  },
  userInfoContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 60,
  },
  nameText: {
    color: colors.BLACK,
  },
  userImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    marginLeft: 15,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
});

export default CustomDrawerContent;
