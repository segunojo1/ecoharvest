import haze from "../assets/cloudfog.svg"

export function displayWeatherIcon(description: string): string {
    const lowerDescription = description;

    if (lowerDescription.includes('clear')) {
        return '☀️'; // Sunny
    } else if (lowerDescription.includes('cloud')) {
        return '☁️'; // Cloudy
    } else if (lowerDescription.includes('rain')) {
        return '🌧️'; // Rain
    } else if (lowerDescription.includes('thunderstorm')) {
        return '⛈️'; // Thunderstorm
    } else if (lowerDescription.includes('snow')) {
        return '❄️'; // Snow
    } else if (lowerDescription.includes('fog') || lowerDescription.includes('haze')) {
        return haze; // Haze/Mist
    } else {
        return '❓'; // Unknown or other
    }
}