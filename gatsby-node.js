/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const fs = require('fs')
const cronograma = require('./src/data/cronograma.json')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  cronograma.forEach(dataContext => {
    dataContext.atividades.forEach(atividadeContext => {
      createPage({
        path: `/palestras-e-workshops/${atividadeContext.slug}/`,
        component: path.resolve('./src/templates/Palestrante.js'),
        context: { dataContext, atividadeContext },
      })
    })
  })

  const blogPostTemplate = path.resolve(`src/templates/Noticias.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}
