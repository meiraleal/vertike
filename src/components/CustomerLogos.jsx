import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Container from './Container';

import messengerLogo from '../images/platforms/messenger.png';
import telegramLogo from '../images/platforms/telegram.png';
import slackLogo from '../images/platforms/slack.png';
import customLogo from '../images/platforms/skype.png';

class CustomerLogos extends Component {
  render() {
    const { t } = this.props;

    const logos = [
      { company: 'Messenger', logo: messengerLogo },
      { company: 'Telegram', logo: telegramLogo },
      { company: 'Slack', logo: slackLogo },
      { company: 'Your Platform', logo: customLogo }
    ];

    return (
      <Container isWide>
        <div className="CustomerLogos">
          <h5>{t('heading')}</h5>
          <div className="CustomerLogos__grid">
            {logos.map(({ company, logo }) => (
              <div className="CustomerLogos__logo" key={company}>
                <img src={logo} alt={company} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default translate('Platforms')(CustomerLogos);
