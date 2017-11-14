import React from 'react';
import 'normalize.css/normalize.css';
import '../styles/main.scss';
import SiteFooter from '../components/SiteFooter';

import i18n from '../components/i18n';

export default ({ children }) => (
  <div>
    {children()}
    <SiteFooter />
  </div>
);
