import { useEffect, useState } from "react";

function WeatherDisplay({place}) {
    const [weather, setWeather] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        async function fetchWeather() {
            const url = new URL(import.meta.env.VITE_CURRENT_WEATHER_URL)
            url.searchParams.set('lat', place.lat)
            url.searchParams.set('lon', place.lon)
            url.searchParams.set('units', 'metric')
            url.searchParams.set('lang', 'da')
            url.searchParams.set('appid', import.meta.env.VITE_API_KEY)

            try {
                const response = await fetch(url)

                if (!response.ok) {
                    setErrorMessage('Kunne ikke hente vejret. Prøv igen senere.')
                    return
                }

                const data = await response.json()
                setWeather(data)
            } catch(error) {
                console.error(error)
                setErrorMessage('Netværksfejl. Kunne ikke hente vejret.')
            }
        }

        fetchWeather()
    }, [place])

    if (errorMessage) {
        return <p>{errorMessage}</p>
    }

    if (!weather) {
        return <p>Henter vejret...</p>
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