import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import i18n from '../components/i18n'; // initialized i18next instance using reactI18nextModule

class Portugues extends Component {
  componentDidMount() {
    i18n.changeLanguage('pt');
    navigateTo('/');
  }

  render() {

    return (
      <div className="Portugues" />
    );
  }
}

export default Portugues;
