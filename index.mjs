import { generateLogsByInterval, generateGenericLog } from './src/logGenerator.mjs';

// Example usage of generating logs by interval of every 5 seconds

generateLogsByInterval(5); 

// Example usage of generating a generic log entry
console.log('Generated Generic Log:', generateGenericLog());