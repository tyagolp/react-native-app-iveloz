import { NavigationActions } from 'react-navigation';

let nav;

function setTopLevelNavigation(navigatorRef) {
  nav = navigatorRef;
}

function navigate(routeName, params) {
  nav.dispatch(NavigationActions.navigate({ routeName, params }));
}

export default {
  setTopLevelNavigation,
  navigate,
};
/*
const config = {};
export function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}
export function navigate(routeName, params) {
  if (config.navigator && routeName) {
    const action = NavigationActions.navigate({ routeName, params });
    config.navigator.dispatch(action);
  }
}
export function goBack() {
  if (config.navigator) {
    const action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
}
*/
