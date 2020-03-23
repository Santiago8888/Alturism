import Particles from 'react-particles-js'
import React from "react"

import { Image } from '../components/Landing/image'
import { Layout } from "../components/layout"
import SEO from "../components/seo"



const particle_params = {
  particles:{ number: { value: 100 }, size: { value: 3 }},
  interactivity: { events: { onhover: { enable: true, mode: "repulse" }}}
}

//   style={{marginTop:'-80vh', padding: '0px calc(50% - 480px + 1.0875rem)'}}>
const Index = () => (
  <Layout mainStyle={{}}>
    <SEO title="Home" />
    <Image src="mainImage"/>
    <section className="hero" style={{marginTop: '-90vh', height: '90vh'}}>
      <div className="hero-body" style={{paddingTop: '35vh', height: '90vh'}}>
        <div className="container">
            <div className="columns is-vcentered">
                <div className="column landing-caption has-text-centered">
                    <h1 
                      className="title is-1 is-light is-semibold is-spaced main-title" 
                      style={{color:'rebeccapurple', marginBottom:20}}
                    > <span style={{fontSize:'4rem'}}>DONATE WITH </span><br/>
                      <span style={{color:'white'}}> A SENSE OF PURPOSE</span> 
                    </h1>
                    <h2 className="subtitle is-5 is-light is-thin" style={{color:'white'}}>
                      Give back to the communities you love and find your meaning 
                    </h2>

                    <p>
                        <a 
                          href="#start" 
                          className="button k-button k-primary raised has-gradient is-fat is-bold"
                          style={{
                            color: 'rgba(102, 51, 153, 1)', 
                            borderColor: 'rgba(102, 51, 153, 0.4)',
                            marginTop: 20
                          }}
                        >
                            <span className="text">Get Started</span>
                            <span className="front-gradient"></span>
                        </a>
                    </p>
                </div>

            </div>
        </div>
      </div>
      <Particles params={particle_params} height={'90vh'} style={{marginTop:'-90vh'}}/>
    </section>

    <section className="hero" style={{backgroundColor:'rgba(102, 51, 153, 0.5)', height:'100vh', zIndex:2}}>
      <div className="container" style={{marginTop:'15vh'}}>
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <div class="card">
              <div class="card-image">
                <figure ><Image src="tourist" style={{}} imgStyle={{ borderRadius: '50%', opacity: 0.75 }}/></figure>
              </div>
              <div class="card-content">
                <p class="title is-4" style={{color: 'rebeccapurple'}}>For Tourists</p>
                <p class="subtitle is-6" style={{color: 'white'}}> 
                  Contribute to the community you spend your next holiday on. 
                </p>
              </div>
            </div>
          </div>

          <div className="column has-text-centered">
            <div class="card">
              <div class="card-image">
                <Image 
                  src="citizen" 
                  style={{}} 
                  imgStyle={{ borderRadius: '50%', opacity: 0.75, height:250, width:400 }}
                />
              </div>
              <div class="card-content">
                <p class="title is-4" style={{color: 'rebeccapurple'}}>For Citizens</p>
                <p class="subtitle is-6" style={{color: 'white'}}> 
                  Spend those extra $20 bucks in causes that resonate with you. 
                </p>
              </div>
            </div>
          </div>

          <div className="column has-text-centered">
            <div class="card">
              <div class="card-image">
                <figure ><Image src="ong" style={{}} imgStyle={{ borderRadius: '50%', opacity: 0.75 }}/></figure>
              </div>
              <div class="card-content">
                <p class="title is-4"  style={{color: 'rebeccapurple'}}>For ONGs</p>
                <p class="subtitle is-6" style={{color: 'white'}}> 
                  Increase your funding revenue, simple and with transparency. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="hero" style={{backgroundColor:'rgba(102, 51, 153, 0.66)', height:'100vh', zIndex:2}}>
    </section>
  </Layout>
)

export default Index
