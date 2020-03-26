import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  // const tron = Reactotron.configure({host:'IP'}) // para celular USB
  // adb reverse tcp:9090 tcp:9090 // caso o emulador não funcine
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
