// import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import './config/ReactotronConfig';
import CodePush from 'react-native-code-push';
 import OneSignal from 'react-native-onesignal';

import App from './App';
import {colors} from './styles';

import store from './store';

class Index extends Component {
   constructor(props) {
    super(props);
    OneSignal.init('6318138f-e533-489c-9ad0-3d84b5a2c186');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillMount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = id => {};

  componentDidMount() {
    changeNavigationBarColor(colors.primary2, false);
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <App />
      </Provider>
    );
  }
}
// export default Index;
export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
