import React, { Component } from 'react';

import { translate } from 'react-i18next';
import { navigateTo } from 'gatsby-link';

import { showIntercom } from '../utils/show-intercom';

class PricingPlan extends Component {
  render() {
    const { t, label, features } = this.props;

    return (
      <div className="Pricing__plan">
        <div className="PricingPlan__top">
          <h3 className="Pricing__plan__heading">
            {t(`${label}.name`)}
          </h3>
          <p className="PricingPlan__feature--key">{t(`${label}.response_limit`)}</p>
          <p className="PricingPlan__feature--key">{t(`${label}.user_limit`)}</p>
          <p className="PricingPlan__feature--key">{t(`${label}.support`)}</p>
          <h5 className="SectionHeading">{t('features.heading')}</h5>
          <ul>
            {label !== 'plus' ? <li>{t(`${label}.includes`)}</li> : null}
            {features.map((feature) => <li key={feature}>{t(`features.${feature}`)}</li>)}
          </ul>
        </div>
        <div className="PricingPlan__bottom">
          <p className="Pricing__plan__price">
            {t(`${label}.price`)}
          </p>
          <button
            className="Button"
            onClick={() => {
              if (label !== 'enterprise') {
                navigateTo('/sign-up');
              } else {
                showIntercom();
              }
            }}
          >
            {t(`${label}.action_label`)}
          </button>
        </div>
      </div>
    );
  }
}

export default translate('PricingPlan')(PricingPlan);
