import React, { Component } from 'react';

import { View, ActivityIndicator, Text, Picker } from 'react-native';
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
  IvlzModelButtonText,

} from '../../../styles/default';

import api from '../../../services/api';

import {Scroll, Form, FormLabel, FormInput, ButtonTitle, ButtonTitleIcon, List} from './styles';

export default class RelatorioAdesao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null,
      refreshing: false,
      status:0,
      month: 0,
      monthNow: parseInt(dateFormat('mm')),
      year: 0,
      yearNow: parseInt(dateFormat('yyyy')),
      modalInfoShow:false,
      modalInfoAdesao:'',
      modalInfoMotivo:'',
      modalFilterShow : false
    };
  }

  componentDidMount() {
    const {monthNow,yearNow, status}= this.state
    const { params } = this.props.navigation.state
    if(params)
      this.setState({status: params.item.key, month: monthNow, year: yearNow},
        this.loadRepositories()
      )
    else
      this.setState({month: monthNow, year: yearNow},
        this.loadRepositories()
      )
  }

  loadRepositories = () => {
    this.setState(
      {
        error: null,
      },
      async () => {
        const { status, month, year } = this.state;
        try {
          const { data } = await api.post('adesao/find', {status, month, year});
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

renderDefaultValue = () => {
  const { data } = this.state;
  if (data.length !== 0) return <View style={{ margin: 25 }} />;
  return (
    <Form>
      <FormLabel>Consulta não obter Resultado</FormLabel>
    </Form>
   );
};

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <List
        data={data}
        keyExtractor={item => String(item.adesaoid)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
        ListFooterComponent={this.renderDefaultValue}
      />
    );
  };

  renderYear = () => {
    const { yearNow, year } = this.state;
    const yearInit = 2020;
    let years = []
    for (let index = yearInit; index <= yearNow; index++)
      years.push(index)

    return (
      <FormInput
        selectedValue={year}
        onValueChange={(itemValue, itemIndex) => this.setState({year:itemValue})}
      >
        {years.map(item => <Picker.Item key={item} label={item.toString()} value={item.toString()} />)}
      </FormInput>
    );
  };



  handleClickAdesao = (item) =>{
    this.setState({
      modalInfoShow: true,
      modalInfoAdesao: `${item.adesaoid} - ${item.cliente}` ,
      modalInfoMotivo: item.motivo
    });
  }

  handleCloseModalInfo = () =>{
    this.setState({modalInfoShow:false, modalInfoAdesao:'', modalInfoMotivo:'' });
  }

  handleOpenModalFilter = () => {

  }
  handleCloseModalFilter = () =>{
    this.setState({modalFilterShow:false },this.loadRepositories());
  }


  render() {
    const { loading, error, month, status, modalInfoShow, modalInfoAdesao, modalInfoMotivo, modalFilterShow } = this.state;
    return (
      <Background>
        <Container style={{flex:1}} >
          <Title>
            <TitleText>Resumo de Atividades</TitleText>
            <ButtonTitle onPress={()=> {this.setState({modalFilterShow:true})}}>
              <ButtonTitleIcon name="gear" />
            </ButtonTitle>

          </Title>
          <View>
            {error ? (
              <Text>Não foi possivel se conectar com o servidor</Text>
            ) : loading ? (
              <ActivityIndicator  />
            ) : (
              this.renderList()
            )}
          </View>
        </Container>
        <IvlzModel
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          animationInTiming={500}
          isVisible={modalInfoShow}
        >
          <IvlzModelView>
            <Form>
                <IvlzModelTitle>{modalInfoAdesao}</IvlzModelTitle>
            </Form>
            <FormLabel>Motivo: </FormLabel>
            <IvlzModelText>{modalInfoMotivo}</IvlzModelText>
            <IvlzModelFooter>
              <IvlzModelButton title="OK" onPress={this.handleCloseModalInfo}>
                <IvlzModelButtonText>Fechar</IvlzModelButtonText>
              </IvlzModelButton>
            </IvlzModelFooter>
          </IvlzModelView>
        </IvlzModel>

        <IvlzModel
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          animationInTiming={500}
          isVisible={modalFilterShow}
        >
          <IvlzModelView>
            <IvlzModelTitle>Filtragem</IvlzModelTitle>
            <Form>
              <FormLabel>Status</FormLabel>
              <FormInput
                selectedValue={status}
                onValueChange={(itemValue, itemIndex) => this.setState({status:itemValue})}>
                <Picker.Item label="Todos" value={0} />
                <Picker.Item label="Aberto" value={1} />
                <Picker.Item label="Aprovado" value={2} />
                <Picker.Item label="Recusado" value={3} />
              </FormInput>
            </Form>
            <Form>
              <FormLabel>Ano</FormLabel>
              {
                this.renderYear()
              }
              </Form>
              <Form>
              <FormLabel>Mes</FormLabel>
              <FormInput
                selectedValue={month}
                onValueChange={(itemValue, itemIndex) => this.setState({month:itemValue})}>
                <Picker.Item label="Janeiro" value={1} />
                <Picker.Item label="Fevereiro" value={2} />
                <Picker.Item label="Março" value={3} />
                <Picker.Item label="Abril" value={4} />
                <Picker.Item label="Maio" value={5} />
                <Picker.Item label="Junho" value={6} />
                <Picker.Item label="Julho" value={7} />
                <Picker.Item label="Agosto" value={8} />
                <Picker.Item label="Setembro" value={9} />
                <Picker.Item label="Outubro" value={10} />
                <Picker.Item label="Novembro" value={11} />
                <Picker.Item label="Dezembro" value={12} />
              </FormInput>
            </Form>
            <IvlzModelFooter>
              <IvlzModelButton title="OK" onPress={this.handleCloseModalFilter}>
                <IvlzModelButtonText>Buscar</IvlzModelButtonText>
              </IvlzModelButton>
            </IvlzModelFooter>
          </IvlzModelView>
        </IvlzModel>
      </Background>
    );
  }
}

