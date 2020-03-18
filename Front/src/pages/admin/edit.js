import React from "react"

import { Form } from '../../components/form'
import { Layout } from "../../components/layout"
import { BreadCrumb, Title } from '../../components/nav'
import SEO from "../../components/seo"


const EditPage = ({ '*': id }) => <Layout>
	<SEO title="Edit Organization" />
	<BreadCrumb crumbs={[{link:'/admin', text: 'Home'}, {text:'Edit'}]}/>
	<Title title={'Edit Organization'}/>
    <Form id={ id } action={'put'}/>
</Layout>

export default EditPage
