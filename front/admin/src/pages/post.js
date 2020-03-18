import React from "react"
import { Link } from "gatsby"

import { BreadCrumb, Title } from '../components/nav'
import { Layout } from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Post Organization" />
    <BreadCrumb crumbs={[{link:'/', text: 'Home'}, {text:'Post'}]}/>
    <Title title={'Add Organization'}/>
  </Layout>
)

export default SecondPage
