import React, { Component } from 'react';

import { View, ActivityIndicator, FlatList, Text } from 'react-native';

import Background from '../../../components/Background';
import AdesaoItem from '../../../components/AdesaoItem';

import {
  Container,
  Title,
  TitleText,
  TitleIcon,
} from '../../../styles/default';

import api from '../../../services/api';

import styles from './styles';

export default class RelatorioAdesao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = () => {
    this.setState(
      {
        error: null,
      },
      async () => {
        try {
          const { data } = await api.get('adesao');
          this.setState({
            data,
            loading: false,
          });
        } catch (error) {
          this.setState({
            error: true,
            loading: false,
          });
        }
      }
    );
  };

  renderListItem = ({ item }) => <AdesaoItem item={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading, error } = this.state;
    return (
      <Background>
        <Container style={{ flex: 1 }}>
          <Title>
            <TitleIcon name="th-list" />
            <TitleText>Resumo de Atividades</TitleText>
          </Title>
          <View>
            {error ? (
              <Text>Não foi possivel se conectar com o servidor</Text>
            ) : loading ? (
              <ActivityIndicator style={styles.loading} />
            ) : (
              this.renderList()
            )}
          </View>
        </Container>
      </Background>
    );
  }
}
