export function getTime(originalString: Date): string{
    const dateObject = new Date(originalString);
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
const timeString: string = new Intl.DateTimeFormat('en-US', options).format(dateObject);

    return timeString;
    
}