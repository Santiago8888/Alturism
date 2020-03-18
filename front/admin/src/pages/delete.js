import React from "react"

import { Form } from '../components/form'
import { Layout } from "../components/layout"
import { BreadCrumb, Title } from '../components/nav'
import SEO from "../components/seo"


const EditPage = ({ '*': id }) => <Layout>
	<SEO title="Delete Organization" />
	<BreadCrumb crumbs={[{link:'/', text: 'Home'}, {text:'Delete'}]}/>
	<Title title={'Delete Organization'}/>
    <Form id={ id } action={'delete'}/>
</Layout>

export default EditPage
