import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import React from "react"


export const Image = ({ src }) => {
    const data = useStaticQuery(graphql`
        query {
            mainImage: file(relativePath: { eq: "sky.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            waterImage: file(relativePath: { eq: "water.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            trainImage: file(relativePath: { eq: "stary.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            mapImage: file(relativePath: { eq: "map.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }  
        }
  `)

  return <Img fluid={data[src].childImageSharp.fluid} style={{height:700, zIndex:-1}} imgStyle={{opacity:0.35}}/>
}
