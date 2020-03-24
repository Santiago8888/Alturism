import Particles from 'react-particles-js'
import React from "react"

import { Image, MapImage, TrainImage, WaterImage } from '../components/Landing/image'
import { Layout } from "../components/layout"
import SEO from "../components/seo"



const particle_params = {
  particles:{ number: { value: 100 }, size: { value: 3 }},
  interactivity: { events: { onhover: { enable: true, mode: "repulse" }}}
}

//   style={{marginTop:'-80vh', padding: '0px calc(50% - 480px + 1.0875rem)'}}>
const SecondPage = () => (
  <Layout mainStyle={{}}>
    <SEO title="Home" />
    <Image src="mainImage"/>
    <section className="hero" style={{marginTop:-700, height:700}}>
      <div className="hero-body" style={{paddingTop:250, height:700}}>
        <div className="container">
            <div className="columns is-vcentered">
                <div className="column landing-caption has-text-centered">
                    <h1 
                      className="title is-1 is-light is-semibold is-spaced main-title" 
                      style={{color:'rebeccapurple', margin:0}}
                    > GIVE BACK </h1>
                    <h2 className="subtitle is-5 is-light is-thin" style={{color:'white'}}>
                      and find your meaning
                    </h2>

                    <p>
                        <a 
                          href="#start" 
                          className="button k-button k-primary raised has-gradient is-fat is-bold"
                          style={{color: 'rgba(102, 51, 153, 1)', borderColor: 'rgba(102, 51, 153, 0.4)'}}
                        >
                            <span className="text">Get Started</span>
                            <span className="front-gradient"></span>
                        </a>
                    </p>
                </div>

            </div>
        </div>
      </div>
      <Particles params={particle_params} height={700} style={{marginTop:-700}}/>
    </section>

    <section className="hero" style={{backgroundColor:'rgba(102, 51, 153, 0.66)', height:700, zIndex:2}}>
      <Image src="waterImage"/>
      <Image src="trainImage"/>
      <Image src="mapImage"/>
    </section>
  </Layout>
)

export default SecondPage
