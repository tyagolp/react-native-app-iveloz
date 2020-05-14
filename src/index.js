// import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import './config/ReactotronConfig';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';
import {Client} from 'bugsnag-react-native';

import App from './App';
import {colors} from './styles';

import store from './store';

const bugsnag = new Client('c509386ff1087e603eba3ceda66efc21');
bugsnag.notify(new Error('Test error'));

const Index = () => {
  useEffect(() => {
    OneSignal.init('6318138f-e533-489c-9ad0-3d84b5a2c186');
    changeNavigationBarColor(colors.primary2, false);

    const onReceived = (data) => {};
    OneSignal.addEventListener('received', onReceived);
    const onOpened = (notification) => {};
    OneSignal.addEventListener('opened', onOpened);
    const onIds = (id) => {};
    OneSignal.addEventListener('ids', onIds);

    return () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    };
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <App />
    </Provider>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
