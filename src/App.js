import React, { Component } from 'react';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavigateService from './services/navigation';
import createRouter from './routes';
import Background from './components/Background';

class App extends Component {
  registerService = ref => {
    NavigateService.setTopLevelNavigation(ref);
  };

  render() {
    const { login } = this.props;
    if (!login.authChecked) return <Background />;

    const Router = createRouter(login.signed);
    return <Router ref={this.registerService} />;
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App);
