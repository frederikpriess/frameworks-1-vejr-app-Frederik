import { useState } from "react";

function CitySearch() {
    const [message, setMessage] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const city = formData.get('city').trim()

        if (city === '') {
            setMessage('Skriv navnet på en by')
            return
        }

        setMessage('')
        console.log('Søger efter:', city)
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