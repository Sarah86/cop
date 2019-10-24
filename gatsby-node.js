/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const cronograma = require("./src/data/cronograma.json")

exports.createPages = async ({ actions: { createPage } }) => {
  cronograma.forEach(dataContext => {
    dataContext.atividades.forEach(atividadeContext => {
      createPage({
        path: `/agenda-e-palestrantes/${atividadeContext.slug}/`,
        component: path.resolve("./src/templates/Palestrante.js"),
        context: { dataContext, atividadeContext },
      })
    })
  })
}