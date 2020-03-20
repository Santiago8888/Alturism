import React from "react"
import Particles from 'react-particles-js'

import { Layout } from "../components/layout"
import SEO from "../components/seo"



const particle_params = {
  particles:{ number: { value: 50 }, size: { value: 3 }},
  interactivity: { events: { onhover: { enable: true, mode: "repulse" }}}
}


const SecondPage = () => (
  <Layout mainStyle={{}}>
    <SEO title="Page two" />
    <section className="hero is-fullheight" style={{backgroundColor:'rgba(102, 51, 153, 0.5)'}}>
      <Particles params={particle_params} />
      <div className="hero-body" style={{marginTop:-825, padding: '0px calc(50% - 480px + 1.0875rem)'}}>
        <div className="container">
            <div className="columns is-vcentered">

                <div className="column is-5 landing-caption">
                    <h1 className="title is-1 is-light is-semibold is-spaced main-title" style={{color:'rebeccapurple'}}>
                      Donations Marketplace
                    </h1>
                    <h2 className="subtitle is-6 is-light is-thin" style={{color:'white'}}>
                      Social inclusive experiences to find meaning.
                    </h2>

                    <p>
                        <a 
                          href="#start" 
                          className="button k-button k-primary raised has-gradient is-fat is-bold"
                          style={{color: 'rgba(102, 51, 153, 1)', borderColor: 'rgba(102, 51, 153, 0.8)'}}
                        >
                            <span className="text">Get Started</span>
                            <span className="front-gradient"></span>
                        </a>
                    </p>
                </div>

                <div className="column is-7">
                    <figure className="image">
                        <img src="assets/img/illustrations/buildings.svg" alt="" />
                    </figure>
                </div>
            </div>
        </div>
      </div>

      <div className="hero-foot">
          <div className="container">
              <div className="tabs is-centered">
                  <ul>
                      <li><a><img className="hero-logo" src="assets/img/clients/cryptomarket.svg" alt="" /></a></li>
                      <li><a><img className="hero-logo" src="assets/img/clients/bitit.svg" alt="" /></a></li>
                      <li><a><img className="hero-logo" src="assets/img/clients/coin.svg" alt="" /></a></li>
                  </ul>
              </div>
          </div>
      </div>
    </section>
  </Layout>
)

export default SecondPage
