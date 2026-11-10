import { useState } from "react"
import CitySearch from "./CitySearch"
import WeatherDisplay from "./WeatherDisplay"

function WeatherPage() {
    const [place, setPlace] = useState(null)
    
    return (
        <main>
            <h1>Vejr-app</h1>
            <CitySearch onPlaceFound={setPlace} />
            {place && <WeatherDisplay key={`${place.lat},${place.lon}`} place={place} />}

        </main>
    )
}

export default WeatherPage