import haze from "../assets/cloudfog.svg"
import cloud from "../assets/cloud2.svg"
import rain from "../assets/rainsmall.svg"
import sun from "../assets/sunsmall.svg"

export function displayWeatherIcon(description: string): string {
    const lowerDescription = description.toLowerCase();

    if (lowerDescription.includes('clear')) {
        return sun; // Sunny
    } else if (lowerDescription.includes('clouds')) {
        return cloud; // Cloudy
    } else if (lowerDescription.includes('rain')) {
        return rain; // Rain
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