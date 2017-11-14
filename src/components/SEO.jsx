import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { getCurrentEnv } from '../utils/get-current-env';

const getDefaultUrl = () => {
  if (getCurrentEnv() === 'development') {
    return "http://localhost:8000";
  } else if (getCurrentEnv() === 'staging') {
    return "http://localhost";
  }
  return "http://chatbotdev.ai";
};

const siteDefault = {
  title: "chatbotdev.ai",
  description: "We craft powerful, yet simple chatbots that people will actually enjoy interact with.",
  url: getDefaultUrl(),
};

class SEO extends Component {
  render() {
    const { pageMeta } = this.props;

    const title = pageMeta && pageMeta.title ? pageMeta.title : siteDefault.title;
    const description = pageMeta && pageMeta.description ? pageMeta.description : siteDefault.description;
    const url = pageMeta && pageMeta.path ? `${siteDefault.url}${pageMeta.path}` : siteDefault.url;

    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url,
        name: title,
      }
    ];

    return (
      <Helmet title={title}>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={`${siteDefault.url}/logos/doopoll_twitter.jpg`} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteDefault.url}/logos/doopoll_og.jpg`} />
        <meta
          property="fb:app_id"
          content={process.env.FB_APP_ID ? process.env.FB_APP_ID : ""}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content="@doopoll"
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteDefault.url}/logos/doopoll_twitter.jpg`} />
      </Helmet>
    );
  }
}

export default SEO;
