import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./style.scss"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Bulma</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Components</a></li>
        <li className="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
      </ul>
    </nav>

    <div className="container">
      <div className="columns">
        { [...Array(3)].map((_, i) => 
          <div className="column" key={i}>
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Component
                </p>
                <a href="/" className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

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
