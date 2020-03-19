import { Consumer } from "../../components/layout"

import { StaticMap } from 'react-map-gl'
import DeckGL from '@deck.gl/react'
import React from "react"


const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZHpldGEiLCJhIjoiY2s2cWFvbjBzMDIzZzNsbnhxdHI5eXIweCJ9.wQflyJNS9Klwff3dxtHJzg'
const MAP_STYLES = ['light-v10', 'dark-v10', 'outdoors-v11', 'satellite-v9']


const initialViewState = {
    latitude: 20.66863519630093,
    longitude: -105.36281629168246,
    zoom: 11.167760421641583,
    bearing: 35.67770502928789,
    pitch: 57.30559875583204
}


export const Deck = () => <Consumer>{ ({ONGs}) => <DeckGL
    initialViewState={initialViewState}
    controller={true}
    onClick={() => console.log(ONGs)}
    onViewStateChange={({ viewState }) => console.log(viewState)}

//			onContextMenu={event => event.preventDefault()}
//			getTooltip={this._getTooltip}
//			onClick={this._getInfoWindow}
//			layers={layers}
//			effects={[lightingEffect]}
>
    <StaticMap 
    onContextMenu={event => event.preventDefault()}
    mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} 
    mapStyle={`mapbox://styles/mapbox/${MAP_STYLES[2]}`}
    attributionControl={false}
//      onLoad={()=> setTimeout(() => this.setState({loaded: true}), 1000)}
    />

</DeckGL> }</Consumer>
