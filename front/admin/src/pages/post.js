import React, { useState } from "react"

import { Layout, Consumer } from "../components/layout"
import { BreadCrumb, Title } from '../components/nav'
import SEO from "../components/seo"

const PostPage = () => {
  const [ form, setForm ] = useState({images:[]})

  return <Layout>
    <SEO title="Post Organization" />
    <BreadCrumb crumbs={[{link:'/', text: 'Home'}, {text:'Post'}]}/>
    <Title title={'Add Organization'}/>

    <div className="field" style={{ marginTop: '3.5rem'}}>
      <label className="label" htmlFor="name">Organization Name</label>
      <div className="control">
        <input 
          id="name"
          className="input" 
          type="text" 
          onChange={({ target }) => setForm({...form, name: target.value})} 
        />
      </div>
    </div>

    <div className="field">
      <label className="label" htmlFor="email">Email</label>
      <div className="control">
        <input 
          id="email"
          className="input"  // is-danger 
          type="email" 
          onChange={({ target }) => setForm({...form, email: target.value})} 
        />
      </div>
      <p className="help is-danger is-hidden">This email is invalid</p>
    </div>

    <div className="field">
      <label className="label" htmlFor="phone">Telephone Number</label>
      <div className="control">
        <input 
          id="phone"
          className="input" // is-success
          type="text" 
          onChange={({ target }) => setForm({...form, phone: target.value})} 
        />
      </div>
      <p className="help is-success is-hidden">Number is valid</p>
    </div>

    <div className="field">
      <label className="label" htmlFor="description">Description</label>
      <div className="control">
        <textarea 
          id="description"
          className="textarea" 
          onChange={({ target }) => setForm({...form, description: target.value})} 
        ></textarea>
      </div>
    </div>

    <Consumer>
      {({post}) => 

        <div className="field" style={{ margin: '3rem'}}>
          <div className="control has-text-centered">
            <button className="button is-link" onClick={() => post(form)}>Submit</button>
          </div>
        </div>
      }
    </Consumer>
  </Layout>
}


export default PostPage
