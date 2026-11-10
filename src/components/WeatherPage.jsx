import { useState } from "react"
import CitySearch from "./CitySearch"

function WeatherPage() {
    const [place, setPlace] = useState(null)
    
    return (
        <main>
            <h1>Vejr-app</h1>
            <CitySearch onPlaceFound={setPlace} />
            {place && <p>{place.name}: {place.lat}, {place.lon}</p>}

        </main>
    )
}

export default WeatherPage