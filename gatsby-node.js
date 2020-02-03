/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const fs = require("fs")
const yaml = require("js-yaml")
const cronograma = require('./src/data/cronograma.json')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  
  cronograma.forEach(dataContext => {
    dataContext.atividades.forEach(atividadeContext => {
      createPage({
        path: `/agenda-e-palestrantes/${atividadeContext.slug}/`,
        component: path.resolve('./src/templates/Palestrante.js'),
        context: { dataContext, atividadeContext },
      })
    })
  })
  const ymlDoc = yaml.safeLoad(fs.readFileSync("./src/content/index.yaml", "utf-8"))
  ymlDoc.forEach(element => {
    createPage({
      path: element.path,
      component: require.resolve("./src/templates/Noticias.js"),
      context: {
        pageContent: element.content,
        links: element.links,
      },
    })
  })
}
