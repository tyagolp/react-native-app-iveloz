import React, { Component } from 'react';

import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import dateFormat from 'dateformat';

import Background from '../../../components/Background';
import AdesaoItem from '../../../components/AdesaoItem';

import {
  Container,
  Title,
  TitleText,
  TitleIcon,
  IvlzModel,
  IvlzModelTitle,
  IvlzModelView,
  IvlzModelText,
  IvlzModelFooter,
  IvlzModelButton,
  IvlzModelButtonText
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
      status:0,
      month: parseInt(dateFormat('mm')),
      year: parseInt(dateFormat('yyyy')),
      modalShow:false,
      modalAdesao:'',
      modalMotivo:''
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
        const { status, month, year } = this.state;
        try {
          const { data } = await api.get('adesao', {status, month, year});
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

  renderListItem = ({ item }) => <AdesaoItem item={item} click={this.handleClickAdesao} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.adesaoid)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  handleClickAdesao = (item) =>{
    console.tron.log(item)

    this.setState({
      modalShow: true,
      modalAdesao: `${item.adesaoid} - ${item.cliente}` ,
      modalMotivo: item.motivo
    });
  }

  handleCloseModal = () =>{
    this.setState({modalShow:false, modalAdesao:'', modalMotivo:'' });
  }

  render() {
    const { loading, error, modalShow, modalAdesao, modalMotivo } = this.state;
    return (
      <Background>
        <Container >
          <Title>
            <TitleIcon name="th-list" />
            <TitleText>Resumo de Atividades</TitleText>
          </Title>
          <View style={styles.containerView}>
            {error ? (
              <Text>Não foi possivel se conectar com o servidor</Text>
            ) : loading ? (
              <ActivityIndicator style={styles.loading} />
            ) : (
              this.renderList()
            )}
          </View>
        </Container>
        <IvlzModel
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          animationInTiming={500}
          isVisible={modalShow}
        >
          <IvlzModelView>
            <IvlzModelTitle>{modalAdesao}</IvlzModelTitle>
            <IvlzModelText>Motivo: {modalMotivo}</IvlzModelText>
            <IvlzModelFooter>
              <IvlzModelButton title="OK" onPress={this.handleCloseModal}>
                <IvlzModelButtonText>Fechar</IvlzModelButtonText>
              </IvlzModelButton>
            </IvlzModelFooter>
          </IvlzModelView>
        </IvlzModel>
      </Background>
    );
  }
}

