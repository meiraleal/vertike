import React, { Component } from 'react';
import { translate } from 'react-i18next';

import SEO from '../components/SEO';

import PageHeader from '../components/PageHeader';
import Container from '../components/Container';

import CustomerLogos from '../components/CustomerLogos';
import SignUp from '../components/SignUp';
import PricingPlan from '../components/PricingPlan';

class Pricing extends Component {
  render() {
    const { t } = this.props;

    const plans = [
      {
        label: 'plus',
        features: [
          'comments', 'email_capture', 'basic_export',
          'draft', 'duplicate', 'images', 'themes',
          'close_poll', 'skipping'
        ],
      }, {
        label: 'super',
        features: ['presenter', 'full_export'],
      }, {
        label: 'enterprise',
        features: ['multi_response', 'invoice_billing'],
      }
    ]

    return (
      <div className="Pricing">
        <SEO pageMeta={{
            title:`${t('heading')} | doopoll`,
            path:'/pricing'
          }}
        />
        <PageHeader>
          <h1>{t('heading')}</h1>
          <p>{t('introduction')}</p>
        </PageHeader>
        <Container isWide>
          <div className="Pricing__plans">
            {plans.map(({ label, features }) => (
              <PricingPlan
                key={label}
                label={label}
                features={features}
              />
            ))}
          </div>
          <p className="Pricing__plans__monthly">{t('monthly_billing')}</p>
        </Container>
        <CustomerLogos />
        <SignUp />
      </div>
    );
  }
}

export default translate('Pricing')(Pricing);
