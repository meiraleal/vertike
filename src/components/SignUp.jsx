import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { showIntercom } from '../utils/show-intercom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   this.setState({value: event.target.value});
 }

  handleSubmit(event) {
    const { i18n } = this.props;
    event.preventDefault();
    const email = this.state.value;
    const { language } = i18n;
    if (email && email.length) {
      window.location.href = `${process.env.APP_URL}/create-account/${email}/${language}`;
    }
  }

  render() {
    const { t, autoFocus } = this.props;

    return (
      <div className="SignUp">
        <div className="SignUp__inner">
          <div className="SignUp__free-trial">
            <h2>{t('free_trial.heading')}</h2>
            <p>{t('free_trial.description')}</p>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="emailAddress" className="hide-label">
                {t('free_trial.email_label')}
              </label>
              <div className="ButtonField">
                <input
                  type="email"
                  name="emailAddress"
                  placeholder={t('free_trial.email_placeholder')}
                  autoFocus={autoFocus}
                  className="Input"
                  onChange={this.handleChange}
                />
                <button type="submit" className="Button">
                  {t('free_trial.action')}
                </button>
              </div>
            </form>
          </div>
          <div className="SignUp__enterprise">
            <h3>{t('enterprise.heading')}</h3>
            <p>{t('enterprise.description')}</p>
            <button className="Button" onClick={() => showIntercom()}>
              {t('enterprise.action')}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('SignUp')(SignUp);
