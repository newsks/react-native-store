import {colors, feedNavigation, feedTabNavigation} from '@/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedStackNavigator from '../stack/FeedStackNavigator';
import FeedFavoriteScreen from '@/screens/feed/FeedFavoriteScreen';
import {StyleSheet} from 'react-native';
import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedHomeHeaderLeft from '@/components/feed/FeedHomeHeaderLeft';

export type FeedTabParamList = {
  [feedTabNavigation.FEED_HOME]: {
    screen: typeof feedNavigation.FEED_DETAIL;
    params: {
      id: number;
    };
    initial: false;
  };
  [feedTabNavigation.FEED_FAVORITE]: undefined;
};

const Tab = createBottomTabNavigator<FeedTabParamList>();

function TabBarIcons(route: RouteProp<FeedTabParamList>, focused: boolean) {
  let iconName = '';

  switch (route.name) {
    case feedTabNavigation.FEED_HOME: {
      iconName = focused ? 'reader' : 'reader-outline';
      break;
    }
    case feedTabNavigation.FEED_FAVORITE: {
      iconName = focused ? 'star' : 'star-outline';
      break;
    }
  }
  return (
    <Ionicons
      name={iconName}
      color={focused ? colors.PINK_700 : colors.GRAY_500}
      size={25}
    />
  );
}

function FeedTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: colors.WHITE,
          shadowColor: colors.GRAY_200,
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: colors.BLACK,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.PINK_700,
        tabBarStyle: {
          backgroundColor: colors.WHITE,
          borderTopColor: colors.GRAY_200,
          borderTopWidth: StyleSheet.hairlineWidth,
        },
        tabBarIcon: ({focused}) => TabBarIcons(route, focused),
      })}>
      <Tab.Screen
        name={feedTabNavigation.FEED_HOME}
        component={FeedStackNavigator}
        options={({route}) => ({
          headerShown: false,
          tabBarStyle: (tabRoute => {
            const routeName = getFocusedRouteNameFromRoute(tabRoute);

            if (
              routeName === feedNavigation.FEED_DETAIL ||
              routeName === feedNavigation.EDIT_POST ||
              routeName === feedNavigation.IMAGE_ZOOM
            ) {
              return {display: 'none'};
            }
            return {
              backgroundColor: colors.WHITE,
              borderTopColor: colors.GRAY_200,
              borderTopWidth: StyleSheet.hairlineWidth,
            };
          })(route),
        })}
      />
      <Tab.Screen
        name={feedTabNavigation.FEED_FAVORITE}
        component={FeedFavoriteScreen}
        options={({navigation}) => ({
          headerTitle: '즐겨찾기',
          headerLeft: () => FeedHomeHeaderLeft(navigation),
        })}
      />
    </Tab.Navigator>
  );
}

export default FeedTabNavigator;
