export function convertToCelsius(temp: number): number {
    const newTemp = temp - 273;
    const rounded = Math.round(newTemp);
    return rounded;
}