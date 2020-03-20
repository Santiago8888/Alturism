import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import React from "react"


export const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sky.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{height:700, zIndex:-1}} imgStyle={{opacity:0.35}}/>
}
