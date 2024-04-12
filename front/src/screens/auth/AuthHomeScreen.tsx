import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Dimensions, Image, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import CustomButton from '@/components/CustomButton';
import {authNavigation} from '@/constants';

const homeLogo = require('../../assets/matzip.png');
type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigation.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" style={styles.image} source={homeLogo} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인하기"
          onPress={() => navigation.navigate(authNavigation.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigation.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 3.5,
    width: Dimensions.get('screen').width / 2.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
});

export default AuthHomeScreen;
