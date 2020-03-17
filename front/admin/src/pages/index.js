import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./style.scss"

const cards = [
  { title: 'ONGs', content: 0, align: 'centered' },
  { title: 'Recently Added', content: 0, align: 'centered' },
  { title: 'Recently Updated', content: 0, align: 'centered' }
]

const ongs = [
  { name: 'Org 1', email: 'mail@org1.com', phone: '55-1111-1111', description: true, images: 1 },
  { name: 'Org 2', email: 'mail@org2.com', phone: '55-1111-1111', description: true, images: 2 },
  { name: 'Org 3', email: 'mail@org3.com', phone: '55-1111-1111', description: true, images: 3 },
  { name: 'Org 4', email: 'mail@org4.com', phone: '55-1111-1111', description: true, images: 4 },
  { name: 'Org 5', email: 'mail@org5.com', phone: '55-1111-1111', description: true, images: 5 },
]


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><Link to="#">Home</Link></li>
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


    <table class="table" style={{ marginTop: '4rem'}}>
      <thead>
        <tr>
          <th><abbr title="Index">#</abbr></th>
          <th>Organization</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th><abbr title="Has Description">Description</abbr></th>
          <th><abbr title="No. of Images">Images</abbr></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td><Link to="/page-2/" title="Leicester City">Leicester City</Link> <strong>(C)</strong></td>
          <td>38</td><td>23</td><td>12</td><td>3</td>
          <td><Link to="/edit" title="Edit">Edit</Link></td>
          <td><Link to="/delete" title="Delete" className="has-text-danger">Delete</Link></td>
        </tr>

        <tr>
          <th>2</th>
          <td><Link to="/page-2/" title="Arsenal">Arsenal</Link></td>
          <td>38</td><td>20</td><td>11</td><td>7</td>
          <td><Link to="/edit" title="Edit">Edit</Link></td>
          <td><Link to="/delete" title="Delete" className="has-text-danger">Delete</Link></td>
        </tr>

        <tr>
          <th>3</th>
          <td><Link to="/page-2/" title="Tottenham Hotspur">Tottenham Hotspur</Link></td>
          <td>38</td><td>19</td><td>13</td><td>6</td>
          <td><Link to="/edit" title="Edit">Edit</Link></td>
          <td><Link to="/delete" title="Delete" className="has-text-danger">Delete</Link></td>
        </tr>

        <tr class="is-selected">
          <th>4</th>
          <td><Link to="/page-2/" title="Manchester City">Manchester City</Link></td>
          <td>38</td><td>19</td><td>9</td><td>10</td>
          <td><Link to="/edit" title="Edit">Edit</Link></td>
          <td><Link to="/delete" title="Delete" className="has-text-danger">Delete</Link></td>
        </tr>

        <tr>
          <th>5</th>
          <td><Link to="/page-2/" title="Manchester United">Manchester United</Link></td>
          <td>38</td><td>19</td><td>9</td><td>10</td>
          <td><Link to="/edit" title="Edit">Edit</Link></td>
          <td><Link to="/delete" title="Delete" className="has-text-danger">Delete</Link></td>
        </tr>
      </tbody>
    </table>

    <br/><br/>

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  
    <div className="container">
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">Cool content. Using Bulma!</p>
        </div>
        <div className="column is-four-fifths">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">This column is cool too!</p>
        </div>
      </div>
    </div>    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
