import React from 'react';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import Container from "../components/Container";
import PageHeader from '../components/PageHeader';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <SEO pageMeta={{
          title:`${post.frontmatter.title} | doopoll`,
          path:`${post.fields.slug}`
        }}
      />
      <PageHeader>
        <h5><Link to="/legals/">Legals</Link></h5>
        <h1>{post.frontmatter.title}</h1>
        <h5 className="PageHeader__meta">Last updated: {post.frontmatter.lastUpdated}</h5>
      </PageHeader>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </div>
  );
}

export const query = graphql`
  query LegalDocQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        lastUpdated
      }
    }
  }
`
