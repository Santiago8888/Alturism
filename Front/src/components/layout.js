/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */


import { RemoteMongoClient, Stitch, AnonymousCredential, BSON } from 'mongodb-stitch-browser-sdk'
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
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db(dbName).collection(collection)
const get_ongs = () => db.find({}, { limit: 100}).asArray().catch(console.log)
const post_ong = doc => db.insertOne(doc).catch(console.log)
const put_ong = ({_id, ...doc}) => db.updateOne({ _id: new BSON.ObjectID(_id)}, {$set: doc}, {upsert: true}).catch(console.log)
const delete_ong = ({_id}) => db.deleteOne({_id: new BSON.ObjectID(_id)}).catch(console.log)


export const { Provider, Consumer } = React.createContext({ONGs: []})
export const Layout = ({ children, mainStyle, headerStyle }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} headerStyle={{ background: `rebeccapurple` }}/>
      <div
        style={ 
          mainStyle 
          ? mainStyle 
          : { margin: `0 auto`, maxWidth: 960, padding: `0 1.0875rem 1.45rem` }}
      >
        <Provider value={{ONGs: ONGs, post:d => post_ong(d), put:d=> put_ong(d), delete:d => delete_ong(d)}}>
          <main>{children}</main>
        </Provider>
        <footer style={{height:60}}>
          <span style={{display:'none'}}>
            © {new Date().getFullYear()}, Built with {` `} 
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

