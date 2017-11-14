import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Container from './Container';

class Testimonial extends Component {
  render() {
    const { t, company, image } = this.props;

    return (
      <div className="Testimonial">
        <Container>
          <p className="Testimonial__quote">{t(`${company}.quote`)}</p>
          <footer>
            <img
              src={image}
              className="Testimonial__portrait"
              alt={t(`${company}.attribution`)}
            />
            <p className="Testimonial__attribution">{t(`${company}.attribution`)}</p>
            <p className="Testimonial__meta">{t(`${company}.position`)} - {t(`${company}.company`)}</p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default translate('Testimonial')(Testimonial);
