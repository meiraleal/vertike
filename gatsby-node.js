const fs = require('fs-extra');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        const { slug } = node.fields;
        if (slug.includes('/legals/')) {
          createPage({
            path: slug,
            component: path.resolve(`./src/templates/LegalsPage.jsx`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug
            },
          })
        }
        if (slug.includes('/jobs/')) {
          createPage({
            path: slug,
            component: path.resolve(`./src/templates/JobsPage.jsx`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug
            },
          })
        }
      })
      resolve();
    })
  })
}

exports.onPostBuild = () => {
  console.log('Copying locales');
  fs.copySync(path.join(__dirname, '/src/locales'), path.join(__dirname, '/public/locales'));
}
