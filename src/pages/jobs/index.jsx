import React from 'react';
import Link from 'gatsby-link'
import SEO from '../../components/SEO';

import PageHeader from '../../components/PageHeader';

export default ({ data }) => (
  <div>
    <SEO pageMeta={{
        title:'Jobs | doopoll',
        path:'/jobs'
      }}
    />
    <PageHeader>
      <h5><Link to="/jobs/">Jobs</Link></h5>
      <h1>Join our team</h1>
      <p>
        Below is a list of our current open positions.
        If you want to join the doopoll team and don't see
        something you can apply for, send us an email anyway!</p>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.fields.slug.includes('jobs')) {
            return <li><Link to={node.fields.slug}>{node.frontmatter.title}</Link></li>
          }
        })}
      </ul>
    </PageHeader>
  </div>
);

export const query = graphql`
  query JobsIndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
