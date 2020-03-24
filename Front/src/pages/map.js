import { Layout } from "../components/layout"
import { Deck } from "../components/Map/deck"
import SEO from "../components/seo"

import React from "react"


const MapView = () => <Layout>
	<SEO title="Map" />
	<Deck/>
</Layout>


export default MapView
