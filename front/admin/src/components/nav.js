import "../pages/style.scss"

import { Link } from "gatsby"
import React from "react"


export const BreadCrumb = ({ crumbs }) => <nav className="breadcrumb" aria-label="breadcrumbs">
  <ul>
    { crumbs.map(({link, text}, idx) => 
        idx < crumbs.length - 1
        ?   <li key={idx}><Link to={ link } style={{color:'rebeccapurple'}}> { text } </Link></li>
        :   <li key={idx}><span style={{padding:'0px 12px'}}> { text } </span></li>
    )}
  </ul>
</nav>

export const Title = ({ title }) => <p className={`title is-2 has-text-centered`} style={{color:'rebeccapurple'}}>  { title }  </p> 
