import { useEffect, useState } from "react";

function WeatherDisplay({place}) {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        async function fetchWeather() {
            const url = new URL(import.meta.env.VITE_CURRENT_WEATHER_URL)
            url.searchParams.set('lat', place.lat)
            url.searchParams.set('lon', place.lon)
            url.searchParams.set('units', 'metric')
            url.searchParams.set('lang', 'da')
            url.searchParams.set('appid', import.meta.env.VITE_API_KEY)

            const response = await fetch(url)
            const data = await response.json()
            setWeather(data)
        }

        fetchWeather()
    }, [place])

    if (!weather) {
        return null
    }

    return (
        <section>
            <h2>{place.name}</h2>
            <p>{Math.round(weather.main.temp)}°C</p>
            <p>{weather.weather[0].description}</p>
        </section>
    )
}

export default WeatherDisplay