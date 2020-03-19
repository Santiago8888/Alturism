import { StaticMap, Marker, Popup } from 'react-map-gl'
import React, { PureComponent, useState } from "react"
import { Consumer } from "../../components/layout"
import DeckGL from '@deck.gl/react'


const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZHpldGEiLCJhIjoiY2s2cWFvbjBzMDIzZzNsbnhxdHI5eXIweCJ9.wQflyJNS9Klwff3dxtHJzg'
const MAP_STYLES = ['light-v10', 'dark-v10', 'outdoors-v11', 'satellite-v9']


const initialViewState = {
    latitude: 20.66863519630093,
    longitude: -105.36281629168246,
    zoom: 11.167760421641583,
    bearing: 35.67770502928789,
    pitch: 57.30559875583204
}

const popupInfo = {
    city:"New York",
    population:"8,175,133",
    image:"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",
    state:"New York",
    longitude: 20.68, 
    latitude:-105.36
}


const SIZE = 20
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`


class CityInfo extends PureComponent {
    render() {
        const {info} = this.props;
        return <div>
            <div>
                {info.name} |{' '}
                <a
//                    target="_new"
//                    href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
                >See More</a>
            </div>
            <img width={240} src={info.image} style={{marginBottom:0}}/>
        </div>
    }
}


class Pins extends PureComponent {
    render() {
        const {data, onClick} = this.props;
    
        return data.map(d => <Marker
            key={`marker`} 
            latitude={d.latitude}
            longitude={d.longitude} 
        >
            <svg
                height={SIZE}
                viewBox="0 0 24 24"
                style={{
                    cursor: 'pointer',
                    fill: '#d00',
                    stroke: 'none',
                    transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                }}
                onClick={() => onClick(d)}
            > <path d={ICON} /> </svg>
        </Marker>)
    }
}



export const Deck = () => {
    const [ window, setWindow ] = useState(null)

    return <Consumer>{
        ({ONGs}) =>  <StaticMap 
            onContextMenu={event => event.preventDefault()}
            mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} 
            mapStyle={`mapbox://styles/mapbox/${MAP_STYLES[2]}`}
            attributionControl={false}

            {...initialViewState}
            
            style={{marginLeft:-150}}
            width={1200}
            height={800}
        >
            <Pins data={ONGs} onClick={d => setWindow(d)} />
            {
                window 
                ? 
                    <Popup
                        tipSize={5}
                        anchor="top"
                        latitude={window.latitude}            
                        longitude={window.longitude}
                        closeOnClick={false}
                        onClose={() => setWindow(false)}
                    ><CityInfo info={{...popupInfo, ...window}} /></Popup>
                :   null
            }
        </StaticMap>
    }</Consumer>
}
