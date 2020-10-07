import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Itens from './Itens';

export default class ListaItens extends Component {

  render() {
    console.log('Objeto é renderizado');
    return (
      <View>
        <Itens />
        <Itens />
        <Itens />
      </View>
    );
  }
}
