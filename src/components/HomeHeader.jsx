import React, { Component } from 'react';
import { translate } from 'react-i18next';

import SiteHeader from './SiteHeader';

import brandSymbols from '../images/doopoll_brand_symbols.svg';

class HomeHeader extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="HomeHeader">
        <SiteHeader />
        <div className="HomeHeader__content">
          <div className="HomeHeader__introduction__background">
            <div className="HomeHeader__introduction">
              <h2>{t('heading')}</h2>
              <p>{t('introduction')}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default translate('HomeHeader')(HomeHeader);
