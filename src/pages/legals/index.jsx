import React from 'react';
import Link from 'gatsby-link'
import SEO from '../../components/SEO';

import PageHeader from '../../components/PageHeader';

export default ({ data }) => (
  <div>
    <SEO pageMeta={{
        title:'Legals | doopoll',
        path:'/legals'
      }}
    />
    <PageHeader>
      <h5><Link to="/legals/">Legals</Link></h5>
      <h1>Your agreements with us</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.fields.slug.includes('legals')) {
            return <li><Link to={node.fields.slug}>{node.frontmatter.title}</Link></li>
          }
        })}
      </ul>
    </PageHeader>
  </div>
);

export const query = graphql`
  query LegalsIndexQuery {
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
