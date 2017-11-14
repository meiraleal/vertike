import React from 'react';
import Container from './Container';
import SiteHeader from './SiteHeader';

export default ({ children }) => (
  <div className="PageHeader">
    <SiteHeader />
    <Container>
      {children}
    </Container>
  </div>
);
