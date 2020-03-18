/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */


import { RemoteMongoClient, Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import { useStaticQuery, graphql } from "gatsby"

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"


const appName = 'yobs-wqucd'
const dbName = 'Alturism'
const collection = 'ONGs'

const client = Stitch.initializeDefaultAppClient(appName)
client.auth.loginWithCredential(new AnonymousCredential())
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db(dbName)
const get_ongs = () => db.collection(collection).find({}, { limit: 100}).asArray().catch(console.log)

export const { Provider, Consumer } = React.createContext([]);

export const Layout = ({ children }) => {
  const [ ONGs, setONGs ] = useState([])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    async function fetchData(){
      const ONGs = await get_ongs()
      setONGs(ONGs)
    }
    
    fetchData()
  }, [])


  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Provider value={ONGs}>
          <main>{children}</main>
        </Provider>
        <footer style={{height:60}}>
          <span style={{display:'none'}}>
            © {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
