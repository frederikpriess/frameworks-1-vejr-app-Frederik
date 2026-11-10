import { useState } from "react"
import CitySearch from "./CitySearch"
import WeatherDisplay from "./WeatherDisplay"

function WeatherPage() {
    const [place, setPlace] = useState(null)
    
    return (
        <main className="page">
            <h1>Hvordan er vejret?</h1>
            <p className="subtitle">Søg efter en by, og få det aktuelle vejr.</p>
            <CitySearch onPlaceFound={setPlace} />
            {place && <WeatherDisplay key={`${place.lat},${place.lon}`} place={place} />}

        </main>
    )
}

export default WeatherPage