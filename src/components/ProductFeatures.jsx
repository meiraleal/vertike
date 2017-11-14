import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Container from './Container';

import anonymousIllustration from '../images/features/anonymous_illustration.svg';
import mobileIllustration from '../images/features/mobile_illustration.svg';
import responsesIllustration from '../images/features/responses_illustration.svg';
import simpleIllustration from '../images/features/simple_illustration.svg';

const featureImages = {
  'simple': simpleIllustration,
  'themes': anonymousIllustration,
  'responses': responsesIllustration,
  'real_time': mobileIllustration,
};

const ProductFeature = (props) => {
  const { heading, description, image, hierachy } = props;
  return (
    <div className="ProductFeatures__feature">
      {image ? <img className="ProductFeatures__illustration" src={image} alt={heading} /> : null}
      {hierachy === 'primary' ? <h3>{heading}</h3> : <h4>{heading}</h4>}
      <p>{description}</p>
    </div>
  );
}

class ProductFeatures extends Component {
  render() {
    const { t } = this.props;

    const primaryFeatures = ['simple', 'themes', 'responses', 'real_time'];
    return (
      <div className="ProductFeatures">
        <Container isWide>
          <h5 className="SectionHeading">{t('section_heading')}</h5>
          <p>{t('introduction')}</p>
          <div className="ProductFeatures--primary">
            {primaryFeatures.map((feature) => (
              <ProductFeature
                heading={t(`${feature}.heading`)}
                description={t(`${feature}.description`)}
                hierachy="primary"
                image={featureImages[feature]}
                key={feature}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default translate('ProductFeatures')(ProductFeatures);
