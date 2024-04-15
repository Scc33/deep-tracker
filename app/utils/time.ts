import { hms } from "../interfaces/timeInterface";

export function secondsToHms(totalSeconds: number): hms {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = Math.floor(totalSeconds % 3600 % 60);

    return {hours, minutes, seconds}; 
}