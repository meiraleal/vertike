import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { showIntercom } from '../utils/show-intercom';

import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

import CustomerLogos from '../components/CustomerLogos';
import SignUp from '../components/SignUp';

class BookDemo extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="BookDemo">
        <SEO pageMeta={{
            title:`${t('heading')} | doopoll`,
            path:'/book-demo'
          }}
        />
        <PageHeader>
          <h1>{t('heading')}</h1>
          <p>{t('introduction')}</p>
          <button className="Button" onClick={()=> showIntercom()}>
            {t('book_demo')}
          </button>
        </PageHeader>
        <CustomerLogos />
        <SignUp />
      </div>
    );
  }
}

export default translate('BookDemo')(BookDemo);
