import React, { Component } from 'react';
import {
  View
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

  UNSAFE_componentWillMount() {
    //requisição HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { console.log(response); })
      .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  render() {
    return (
      <View>
        <Itens />
        <Itens />
        <Itens />
      </View>
    );
  }
}
