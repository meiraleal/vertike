import React from 'react';
import SEO from '../components/SEO';

import SiteHeader from '../components/SiteHeader';
import CustomerLogos from '../components/CustomerLogos';
import SignUp from '../components/SignUp';

export default () => (
  <div>
    <SEO pageMeta={{
        title:'Sign-up | doopoll',
        path:'/sign-up'
      }}
    />
    <SiteHeader />
    <CustomerLogos />
    <SignUp autoFocus />
  </div>
);
