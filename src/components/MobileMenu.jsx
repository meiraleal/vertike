import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import classNames from 'classnames';

class MobileMenu extends Component {
  render() {
    const { t, isOpen, toggleMobileMenu } = this.props;

    const menuClass = classNames('MobileMenu', { 'MobileMenu--open': isOpen });

    return (
      <div className={menuClass}>
        <div className="MobileMenu__inner">
          <ul className="MobileMenu__nav">
            <li>
              <Link to="/" exact activeClassName="MobileMenu__active-link">
                {t('home')}
              </Link>
            </li>
            <li>
              <Link to="/pricing" exact activeClassName="MobileMenu__active-link">
                {t('pricing')}
              </Link>
            </li>
            <li>
              <Link to="/contact" exact activeClassName="MobileMenu__active-link">
                {t('contact')}
              </Link>
            </li>
            <li><a href="https://app.doopoll.co">{t('log_in')}</a></li>
            <li className="MobileMenu__nav__button">
              <Link to="/sign-up">{t('free_trial')}</Link>
            </li>
          </ul>
          <button
            className="MobileMenu__mobile-toggle"
            onClick={toggleMobileMenu}
          >
            {t('close')}
          </button>
        </div>
      </div>
    );
  }
}

export default translate('MobileMenu')(MobileMenu);
