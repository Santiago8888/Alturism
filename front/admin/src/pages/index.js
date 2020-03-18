import React from "react"
import { Link } from "gatsby"

import { Layout, Consumer } from "../components/layout"
import SEO from "../components/seo"
import "./style.scss"


const cards = [
  { title: 'ONGs', content: 0, align: 'centered' },
  { title: 'Recently Added', content: 0, align: 'centered' },
  { title: 'Recently Updated', content: 0, align: 'centered' }
]

/*
TODO: Delete me.
const ongs = [
  { id: 1, name: 'Org 1', email: 'mail@org1.com', phone: '55-1111-1111', description: true, images: 1 },
  { id: 2, name: 'Org 2', email: 'mail@org2.com', phone: '55-2222-2222', description: false, images: 2 },
  { id: 3, name: 'Org 3', email: 'mail@org3.com', phone: '55-3333-3333', description: true, images: 3 },
  { id: 4, name: 'Org 4', email: 'mail@org4.com', phone: '55-4444-4444', description: false, images: 4 },
  { id: 5, name: 'Org 5', email: 'mail@org5.com', phone: '55-5555-5555', description: true, images: 5 },
]
*/

const IndexPage = () => <Layout>
  <SEO title="Admin" />
  <nav className="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><Link to="/" style={{color:'rebeccapurple'}}>Home</Link></li>
    </ul>
  </nav>

  <p className={`title is-2 has-text-centered`} style={{color:'rebeccapurple'}}> Admin Panel </p> 
  <div className="container" style={{ marginTop: '2rem'}}>
    <div className="columns">
      { cards.map(({ title, content, align }, i) => 
        <div className="column" key={i}>
          <div className="card">
            <header className="card-header">
              <p 
                className={`card-header-title has-text-${align} is-uppercase`} 
                style={{display:'block'}}
              > { title } </p>
            </header>
            <div className="card-content">
              <div className="content"> 
                <p className={`title is-2 has-text-centered`}> { content } </p> 
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>

  <p className={`title is-4`} style={{color:'rebeccapurple', marginTop: '4rem'}}> List of ONGs </p> 
  <Consumer>
    { value =>
      <table className="table has-text-centered">
        <thead>
          <tr>
            <th><abbr title="Index">#</abbr></th>
            <th> Organization</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th><abbr title="Has Description">Description</abbr></th>
            <th><abbr title="No. of Images">Images</abbr></th>
            <th colSpan="2"> Action</th>
          </tr>
        </thead>

        <tbody>
          { value.map(({ id, name, email, phone, description, images }) => <tr key={id}>
            <th> {id} </th>
            <td><Link to={`/org/${id}`} title="Leicester City"><strong> { name } </strong></Link></td>
            <td> { email } </td>
            <td> { phone } </td>
            <td className="is-capitalized"> { String(description) } </td>
            <td> { images } </td>
            <td><Link to={`/edit/${id}`} title="Edit">Edit</Link></td>
            <td><Link to={`/delete/${id}`} title="Delete" className="has-text-danger">Delete</Link></td>
          </tr> )}
        </tbody>
      </table>
    }
  </Consumer>


</Layout>


export default IndexPage
