import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'


const INFOWINDOW_STYLE = {
	position: 'absolute',
  right: 0,
  top: 0,
  width: 344,
  background: '#fff',
  boxShadow: '0 0 3px rgba(0, 0, 0, 0.15)',
  margin: 24,
  padding: '6px 9px',
  height: '90%',
  overflowX: 'hidden',
  overflowY: 'overlay',
	outline: 'none',
	paddingRight: 20,
	paddingLeft: 10,
  paddingTop: 10,
  cursor: 'auto'
}

const LocationIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "location.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} imgStyle={{height: 24, width:24}} style={{height:24, width:24}}/>
}


const SideCarousel = ({ images }) => <Carousel>
  {images.map((img, i) => <div key={i}>
      <img src={img} alt={`img-${i}`}/>
      <p className="legend" style={{display: 'none'}}>Legend 1</p>
  </div>)}
</Carousel>



export const SideBar = ({ object, onClose }) => <div style={ INFOWINDOW_STYLE }>
    <img
      onClick={()=> onClose()}
      style={{height: 20, float: 'right', margin:4, cursor: 'pointer'}} 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDuVVa-KzkV-_b1M-AIuaxidRmbyRmz_I0SxhbvJ-974Vd_yZG' 
      alt='close'
    />

    <h2 className='title is-2' style={{color:'rebeccapurple', marginBottom:'1rem'}}>  { object.name } </h2>

    <span style={{marginTop: '1rem'}}>
        <LocationIcon/>
        <i style={{padding:6}}>{ object.address }</i>
    </span>

    <p style={{marginTop: '0rem'}}>
        <strong style={{color: '#363636'}}>Email:</strong> { object.email } <br/>
        <strong style={{color: '#363636'}}>Telephone Number: </strong> { object.phone } 
    </p>

    <p style={{marginTop: '1.25rem', marginBottom:'1.25rem'}}>
        <strong style={{color: '#363636'}}>Description: </strong> 
        { object.description } 
    </p>

    <SideCarousel images={object.images}/>
    <div style={{marginTop:'2.5rem'}} align='center'>
        <button className='button is-link is-outlined'>Donate</button>
    </div>
</div>
