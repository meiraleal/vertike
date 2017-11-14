import React from 'react';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import Container from "../components/Container";
import PageHeader from '../components/PageHeader';

export default ({ data }) => {
  const post = data.markdownRemark;
  const { title, lastUpdated, closingDate, salary } = post.frontmatter;
  return (
    <div>
      <SEO pageMeta={{
          title:`${title} | doopoll`,
          path:`${post.fields.slug}`
        }}
      />
      <PageHeader>
        <h5><Link to="/jobs/">Jobs</Link></h5>
        <h1>{title}</h1>
        {salary ? <p className="lead">{salary}</p>: null}
        <h5 className="PageHeader__meta">Posted: {lastUpdated}</h5>
        <h5 className="PageHeader__meta">Closing Date: {closingDate}</h5>
      </PageHeader>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </div>
  );
}

export const query = graphql`
  query JobPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        lastUpdated
        closingDate
        salary
      }
    }
  }
`
