import React from 'react';
import Link from 'gatsby-link'
import SEO from '../components/SEO';

import PageHeader from '../components/PageHeader';

export default () => (
  <div>
    <SEO pageMeta={{
        title:'404 | doopoll'
      }}
    />
    <PageHeader>
      <h1>¯\_(ツ)_/¯</h1>
      <h3>There&apos;s nothing here...</h3>
      <p>
        Maybe there was once. If that&apos;s the case, we&apos;re sorry it&apos;s gone.
        Double check the spelling of your url just in case.
      </p>
      <p>Here are some useful links to get you back on track.</p>
      <ul>
        <li><Link to="/">Our home page</Link></li>
        <li><a href="http://doo.vote">Enter a poll short / event code</a></li>
        <li><a href="http://app.doopoll.co">Log in to doopoll</a></li>
        <li><a href="http://support.doopoll.co">View our support articles</a></li>
        <li><Link to="/contact">Talk to us about something else</Link></li>
      </ul>
    </PageHeader>
  </div>
);
