import { Elements, CardElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Deck } from './components/Map/deck'
import { Layout } from './components/layout'

import { Link, Element } from 'react-scroll'
import Particles from 'react-particles-js'
import React, { useState } from "react"


const stripePromise = loadStripe('pk_test_Is0Sh4t8ITyTM78qc2xgcgrV00t2LBs3iQ')
const particle_params = {
  particles:{ number: { value: 200 }, size: { value: 3 }},
  interactivity: { events: { onhover: { enable: true, mode: "repulse" }}}
}


const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {color: '#fce883'},
      '::placeholder': {color: '#87bbfd'},
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  }
}


const Index = () => {
  const [form, setForm] = useState({ organization: null, name: null, mail: null })
  return <Layout mainStyle={{}}>
    <img src="sky.png" style={{height:'90vh', zIndex:-1, minWidth:'100%', marginBottom: 0 }}/>
    <section className="hero" style={{marginTop: '-90vh', height: '90vh'}}>
      <div className="hero-body" style={{paddingTop: '28vh', height: '90vh'}}>
        <div className="container">
            <div className="columns is-vcentered">
                <div className="column landing-caption has-text-centered">
                    <h1 
                      className="title is-1 is-light is-semibold is-spaced main-title" 
                      style={{color:'rebeccapurple', marginBottom:20}}
                    > <span style={{fontSize:'4rem', color:'white'}}>DONATE WITH </span><br/>
                      <span style={{color:'white'}}> A SENSE OF PURPOSE</span> 
                    </h1>
                    <h2 className="subtitle is-5 is-light is-thin" style={{color:'white'}}>
                      Give back to the communities you love.
                    </h2>

                    <p>
                      <Link to="sectionTwo" smooth={true} offset={50} duration={1000}>
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
                      </Link>
                    </p>
                </div>

            </div>
        </div>
      </div>
      <Particles params={particle_params} height={'90vh'} style={{marginTop:'-90vh'}}/>
    </section>

    <Element name="sectionTwo">
      <section className="hero" style={{backgroundColor:'rgba(102, 51, 153, 0.5)', height:'105vh', zIndex:2, marginTop:'-5vh'}}>
        <div className="container has-text-centered" style={{marginTop:'20vh', maxWidth:1650, width:'100%'}}>
          <h2 className="title is-2 is-light is-thin" style={{color:'white', marginBottom: '10vh'}}>
            Who is this for?
          </h2>
          <div className="columns is-vcentered" style={{}}>
            <div className="column">
              <div className="card">
                <div className="card-image">
                  <img 
                    src="tourist.jpg" 
                    style={{ borderRadius: '48%', height:350, width:400, objectPosition: '0% -75px' }}
                  />
                </div>
                <div className="card-content" style={{marginTop:-100}}>
                  <p className="title is-3" style={{color: 'rebeccapurple'}}>Travellers</p>
                  <p className="subtitle is-5" style={{color: 'white'}}> 
                    And the communities they visit. 
                  </p>
                </div>
              </div>
            </div>

            <div className="column has-text-centered">
              <div className="card">
                <div className="card-image">
                  <img 
                    src="citizen.jpg" 
                    style={{ borderRadius: '48%', height:350, width:400, objectPosition: '0% -75px' }}
                  />
                </div>
                <div className="card-content" style={{marginTop:-100}}>
                  <p className="title is-3" style={{color: 'rebeccapurple'}}>Locals</p>
                  <p className="subtitle is-5" style={{color: 'white'}}> 
                    With an extra $20 to spare. 
                  </p>
                </div>
              </div>
            </div>

            <div className="column has-text-centered">
              <div className="card">
                <div className="card-image">
                  <img 
                    src="ong.jpg" 
                    style={{ borderRadius: '48%', height:350, width:400, objectPosition: '0% -75px' }}
                  />
                </div>
                <div className="card-content" style={{marginTop:-100}}>
                  <p className="title is-3"  style={{color: 'rebeccapurple'}}>ONGs</p>
                  <p className="subtitle is-5" style={{color: 'white'}}> 
                    To increase thier funding. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>
            <Link to="sectionThree" smooth={true} offset={50} duration={1000}>
              <a 
                href="#start" 
                className="button k-button k-primary raised has-gradient is-fat is-bold"
                style={{
                  color: 'rgba(102, 51, 153, 1)', 
                  borderColor: 'rgba(102, 51, 153, 0.4)',
                  marginTop: '5vh'
                }}
              >
                  <span className="text">Find a cause</span>
                  <span className="front-gradient"></span>
              </a>
            </Link>
          </p>

        </div>
      </section>
    </Element>


    <Element name="sectionThree">
      <section className="hero" style={{backgroundColor:'rgba(102, 51, 153, 0.66)', height:'100vh', zIndex:2, flexDirection: 'inherit'}}>
        <div className="container has-text-centered" style={{padding:'0% 2%', maxWidth:2500}}>
          <div className="columns is-vcentered" style={{marginTop:'3%'}}>
            <div className="column" style={{padding: '2rem'}}>
              <h2 className="title is-3 is-light is-thin" style={{color:'white'}}>
                Select an ONG <br/> from the map.
              </h2>
              <fieldset className="FormGroup">
                <div className="FormRow">
                  <label class="FormRowLabel">Organization</label>
                  <input class="FormRowInput" value={form.organization}/>
                </div>
                <div className="FormRow">
                  <label class="FormRowLabel">Name</label>
                  <input class="FormRowInput"/>
                </div>
                <div className="FormRow">
                  <label class="FormRowLabel">Email</label>
                  <input class="FormRowInput"/>
                </div>
                <div className="FormRow" >
                  <Elements stripe={stripePromise}>
                    <CardElement options={CARD_OPTIONS} onChange={console.log} />
                  </Elements>
                </div>
              </fieldset>
              <button class="SubmitButton " type="submit">Give $20</button>
            </div>
            <div className="column is-two-thirds"  style={{padding:'5% 2%', textAlign:'left', paddingBottom:0}}>
              <Deck onSelect={o => setForm({...form, organization:o})}/>
            </div>
          </div>
        </div>
      </section>
    </Element>
  </Layout>
}


export default Index
