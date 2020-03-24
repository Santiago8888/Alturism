import PropTypes from "prop-types"
import React from "react"
//import { Link } from 'react-router-dom'

const Header = ({ siteTitle, headerStyle }) => (
  <header
    style={
      headerStyle
      ? { ...headerStyle, height:'10vh'}
      : { background: `rebeccapurple`, marginBottom: `1.45rem`}}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth:1160,
        height:'10vh',
        padding: `0rem 1.0875rem`,
      }}
    >
      <div style={{ display: 'table-cell', verticalAlign: 'middle', height:'10vh' }}>
        <h1 style={{ margin: 0 }} className="title is-2">
          <span to="/admin" style={{ color: `white`, textDecoration: `none` }}>
            {siteTitle}
          </span>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
