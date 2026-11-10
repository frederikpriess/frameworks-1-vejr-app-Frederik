import { useState } from "react";

function CitySearch({ onPlaceFound }) {
    const [message, setMessage] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const city = formData.get('city').trim()

        if (city === '') {
            setMessage('Skriv navnet på en by')
            return
        }

        setMessage('Søger...')

        const url = new URL(import.meta.env.VITE_GEOCODING_URL)
        url.searchParams.set('q', `${city},DK`)
        url.searchParams.set(`limit`, '1')
        url.searchParams.set('appid', import.meta.env.VITE_API_KEY)

        try {
            const response = await fetch(url)

            if (!response.ok) {
                setMessage('Kunne ikke hente data. Prøv igen senere.')
                return
            }

            const places = await response.json()

            if (places.length === 0) {
                setMessage('Ingen by fundet med det navn')
                return
            }

            setMessage('')
            onPlaceFound(places[0])
        } catch (error){
            console.error(error)
            setMessage('Netværksfejl. Tjek din forbindelse.')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="city" placeholder="Skriv en by, fx København" />
            <button type="submit">Søg vejr</button>
            {message && <p>{message}</p>}
        </form>
    )
}

export default CitySearch