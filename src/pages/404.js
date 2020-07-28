import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não achado" />
    <h1>Não encontramos nada</h1>
    <p>Parece que essa página não existe... tente navegar pelo nosso site.</p>
  </Layout>
)

export default NotFoundPage
