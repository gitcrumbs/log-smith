import { generateLogsByInterval, generateGenericLog } from './src/logGenerator.mjs';

// Example usage of generating logs by interval
generateLogsByInterval(5); // Generates a log every 5 seconds

// Example usage of generating a generic log entry
console.log('Generated Generic Log:', generateGenericLog());