import React from "react"
import { Link } from "gatsby"

import { Layout, Consumer } from "../../components/layout"
import SEO from "../../components/seo"
import "./admin.scss"


const cards = [
  { title: 'ONGs', content: 0, align: 'centered' },
  { title: 'Recently Added', content: 0, align: 'centered' },
  { title: 'Recently Updated', content: 0, align: 'centered' }
]


const IndexPage = () => <Layout>
  <SEO title="Admin" />
  <nav className="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li><Link to="/admin" style={{color:'rebeccapurple'}}>Home</Link></li>
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

  <div className="columns" style={{marginTop: '4rem'}}>
    <div className="column" style={{marginTop: 'auto'}}>
      <p className={`title is-4`} style={{color:'rebeccapurple'}}> List of ONGs </p> 
    </div>
    <div className="column" style={{paddingBottom: 6}}>
      <Link 
        to={'/admin/post'}
        className="button is-warning is-light is-pulled-right" 
        style={{ 
          backgroundColor: 'rgba(184, 134, 11, 0)',
          color: 'darkgoldenrod',
          borderColor: 'rgba(184, 134, 11, 1)'
        }}
      >Add Organization</Link>
    </div>
  </div>

  <Consumer>
    { ({ONGs}) =>
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
          { ONGs.map(({ name='', email='', phone='', description='', images=[] }, i) => <tr key={i + 1}>
            <th> {i + 1} </th>
            <td><Link to={`/admin/edit/${i + 1}`} title={name}><strong> { name } </strong></Link></td>
            <td> { email } </td>
            <td> { phone } </td>
            <td className="is-capitalized"> { String(description.length > 0) } </td>
            <td> { images.length } </td>
            <td><Link to={`/admin/edit/${i + 1}`} title="Edit">Edit</Link></td>
            <td><Link to={`/admin/delete/${i + 1}`} title="Delete" className="has-text-danger">Delete</Link></td>
          </tr> )}
        </tbody>
      </table>
    }
  </Consumer>
</Layout>


export default IndexPage
