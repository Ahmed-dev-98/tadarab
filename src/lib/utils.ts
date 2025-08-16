import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatDuration = (duration: number) => {
  const durationNumber = Number(duration);
  const hours = Math.floor(durationNumber / 3600);
  const minutes = Math.floor((durationNumber % 3600) / 60);
  return {
    hours,
    minutes,
  }
};