import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import api from '../../../services/api';
import PlanoItem from '../../../components/PlanoItem';
import Backgroud from '../../../components/Background';

import {
  Container,
  Page,
  PageIndex,
  PageNumber,
  Title,
  TitleText,
  TitleIcon,
} from '../../../styles/default';
import { List, ListLoad } from './styles';

import * as AdesaoActions from '../../../store/modules/adesao/actions';

class Plano extends Component {
  state = { data: [], refreshing: false, loading: true };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const { data } = await api.get('combo');
    this.setState({
      data,
      loading: false,
    });
  };

  renderListItem = ({ item }) => (
    <PlanoItem item={item} onSelectPlano={() => this.handleSelectPlano(item)} />
  );

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <List
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  handleClose = () => {
    const { navigation } = this.props;

    navigation.navigate('Adesao');
  };

  handleSelectPlano = plano => {
    const { setPlanoRequest } = this.props;
    setPlanoRequest(plano);
    const { navigation } = this.props;
    navigation.navigate('Financeiro');
  };

  render() {
    const { loading } = this.state;
    return (
      <Backgroud>
        <Container style={{flex:1}}>
          <Page>
            <PageIndex color />
            <PageIndex color />
            <PageIndex />
            <PageIndex />
            <PageIndex />
            <PageIndex />
          </Page>
          <PageNumber>2/6</PageNumber>
          <Title>
            <TitleIcon name="inbox" />
            <TitleText>Escolha seu Plano</TitleText>
          </Title>
          {loading ? <ListLoad /> : this.renderList()}
        </Container>
      </Backgroud>
    );
  }
}

const mapStateToProps = state => ({
  adesao: state.adesao,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AdesaoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Plano);
