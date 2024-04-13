const mainNavigation = {
  HOME: 'Home',
  FEED: 'Feed',
  CALENDAR: 'Calendar',
} as const;

const authNavigation = {
  AUTH_HOME: 'AuthHome',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
} as const;

const mapNavigation = {
  MAP_HOME: 'MapHome',
  ADD_POST: 'AddPost',
} as const;

const feedNavigation = {
  FEED_HOME: 'FeedHome',
  FEED_DETAIL: 'FeedDetail',
} as const;

export {mainNavigation, authNavigation, mapNavigation, feedNavigation};
