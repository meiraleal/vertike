import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';

import Icon from './Icon';
import MobileMenu from './MobileMenu';
import logo from '../images/logo.png';

class SiteHeader extends Component {
  constructor() {
    super();
    this.state = { menuOpen: false };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { t } = this.props;

    return (
      <div className="SiteHeader">
        <Link to="/">
          <img className="SiteHeader__logo" src={logo} alt="doopoll" />
        </Link>
        <button
          className="SiteHeader__mobile-toggle"
          onClick={this.toggleMobileMenu}
        >
          <Icon icon="bars" pad="right" />{t('menu')}
        </button>
        <ul className="SiteHeader__nav">
          <li><Link to="/" exact activeClassName="SiteHeader__active-link">{t('home')}</Link></li>
          <li><Link to="/pricing" exact activeClassName="SiteHeader__active-link">{t('pricing')}</Link></li>
          <li><Link to="/contact" exact activeClassName="SiteHeader__active-link">{t('contact')}</Link></li>
          <li><a href={process.env.APP_URL}>{t('log_in')}</a></li>
          <li className="SiteHeader__nav__button">
            <Link to="/sign-up">{t('free_trial')}</Link>
          </li>
        </ul>
        <MobileMenu isOpen={this.state.menuOpen} toggleMobileMenu={this.toggleMobileMenu} />
      </div>
    );
  }
}

export default translate('SiteHeader')(SiteHeader);
