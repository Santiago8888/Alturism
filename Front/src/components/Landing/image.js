import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import React from "react"


export const Image = ({ src, style, imgStyle }) => {
    const data = useStaticQuery(graphql`
        query {
            mainImage: file(relativePath: { eq: "sky.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            citizen: file(relativePath: { eq: "citizen.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            ong: file(relativePath: { eq: "ong.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            tourist: file(relativePath: { eq: "tourist.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }  
        }
  `)

  return <Img 
    fluid={data[src].childImageSharp.fluid} 
    style={!!style ? style : {height:'90vh', zIndex:-1}} 
    imgStyle={!!imgStyle ? imgStyle : {opacity:0.35}}
  />
}
