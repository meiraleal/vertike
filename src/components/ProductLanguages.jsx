import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Container from './Container';

class ProductLanguages extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="ProductLanguages">
        <Container>
          <h2>{t('heading')}</h2>
          <p>{t('description')}</p>
        </Container>
      </div>
    );
  }
}

export default translate('ProductLanguages')(ProductLanguages);
