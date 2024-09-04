import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges Tailwind CSS class names.
 *
 * This utility function takes multiple class name inputs, combines them using `clsx`,
 * and then merges them with Tailwind's `twMerge` to handle class name conflicts.
 *
 * @param {...ClassValue[]} inputs - The class names to be combined and merged.
 * @returns {string} The resulting merged class name string.
 */
const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export default cn;
