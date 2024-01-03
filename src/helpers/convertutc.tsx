export function convertUtcToNormalDate(utcTimestamp: number): string {
    // Multiply by 1000 to convert seconds to milliseconds
    const milliseconds = utcTimestamp * 1000;

    // Create a new Date object using the milliseconds
    const normalDate = new Date(milliseconds);

    const dateObject = new Date(normalDate);
    console.log(dateObject);
    

// Use toLocaleDateString to get the date part
const formattedDate = dateObject.toLocaleDateString("en-US", {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});
    return formattedDate;
}