/**
 * @format
 */
import {API_KEY} from '@env';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';

AppRegistry.registerComponent(appName, () => App);
