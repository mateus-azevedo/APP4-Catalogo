import React, { Component } from 'react';
import {
  Text
} from 'react-native';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);
    console.log('Construindo a aplicação');
  }

  UNSAFE_componentWillMount() {
    console.log('Fazer alguma coisa antes de renderizar');
  }

  componentDidMount() {
    console.log('Fazer alguma coisa depois da renderização');
  }

  render() {
    console.log('Objeto é renderizado');
    return (
      <Text>Teste de Importação de componente</Text>
    );
  }
}
