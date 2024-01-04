export function convrtUtcToFullDate(utcTimestamp: number):Date {
    const milliseconds = utcTimestamp * 1000;

    // Create a new Date object using the milliseconds
    const normalDate = new Date(milliseconds);

    return normalDate;
}