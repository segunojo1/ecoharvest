export function getTime(originalString: string): string{
    const dateAndTime = new Date(originalString);

// Get the time in the format "h:mm:ss AM/PM"
const formattedTime = dateAndTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });

    return formattedTime;
    
}