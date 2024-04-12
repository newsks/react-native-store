import axios from 'axios';
import {Platform} from 'react-native';

const axiosInstance = axios.create({
  baseURL:
    Platform.OS === 'android'
      ? 'http://192.168.219.104:3030'
      : 'http://localhost:3030',
  withCredentials: true,
});

export default axiosInstance;
