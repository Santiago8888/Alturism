import React from "react"


export const Image = ({ src, style, imgStyle }) => <img 
    src={src} 
    style={!!style ? style : {height:'90vh', zIndex:-1}} 
    imgStyle={!!imgStyle ? imgStyle : {opacity:0.35}}
/>

