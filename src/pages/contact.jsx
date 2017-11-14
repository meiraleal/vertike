import React, { Component } from 'react';
import { translate } from 'react-i18next';
import SEO from '../components/SEO';
import { showIntercom } from '../utils/show-intercom';

import PageHeader from '../components/PageHeader';

import CustomerLogos from '../components/CustomerLogos';
import SignUp from '../components/SignUp';

class Contact extends Component {
  render() {
    const { t } = this.props;

    return (
      <div className="Contact">
        <SEO pageMeta={{
            title:`${t('heading')} | doopoll`,
            path:'/contact'
          }}
        />
        <PageHeader>
          <h1>{t('heading')}</h1>
          <p>{t('introduction')}</p>
          <ul>
            <li><a href="#" onClick={() => showIntercom()}>{t('sales')}</a></li>
            <li><a href="#" onClick={() => showIntercom()}>{t('demo')}</a></li>
            <li><a href="http://support.doopoll.co">{t('support')}</a></li>
            <li>
              <a
                href="#"
                onClick={() => Intercom('showNewMessage',
                  `REPORTING AN ISSUE:
Please include as much information as possible. Write your issue below this line:
---

`
                )}
              >
                {t('report_issue')}
              </a>
            </li>
            <li><a href="mailto:marc@doopoll.co">{t('press')}</a></li>
            <li><a href="mailto:marc@doopoll.co">{t('misc')}</a></li>
          </ul>
        </PageHeader>
        <CustomerLogos />
        <SignUp />
      </div>
    );
  }
}

export default translate('Contact')(Contact);
