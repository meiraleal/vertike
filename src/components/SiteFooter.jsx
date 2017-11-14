import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import Icon from '../components/Icon';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { showIntercom } from '../utils/show-intercom';

class SiteFooter extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="SiteFooter">
        <div className="SiteFooter__inner">
          <div className="SiteFooter__row">
            <LanguageSwitcher />
            <ul className="SiteFooter__social">
              <li>
                <a href="https://www.linkedin.com/company/10096299/">
                  <Icon icon="linkedin" />
                </a>
              </li>
              <li>
                <a href="http://twitter.com/doopoll">
                  <Icon icon="twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/doopoll-147137342316809/">
                  <Icon icon="facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default translate('SiteFooter')(SiteFooter);
