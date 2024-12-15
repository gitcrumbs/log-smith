# Logsmith

Logsmith is a package for generating synthetic log data with different log levels and custom templates.

## Usage":
You can generate synthetic logs using the functions provided in the package.

### Example
```javascript
import { generateLogsByInterval, generateGenericLog } from './src/logGenerator.mjs';

// Example usage of generating logs by interval
generateLogsByInterval(5); // Generates a log every 5 seconds

// Example usage of generating a generic log entry
console.log('Generated Generic Log:', generateGenericLog());


Functions
generateLogsByInterval(seconds)
Generates logs at a specified interval.

seconds (number): The interval in seconds at which logs should be generated.
generateGenericLog()
Generates a single generic log entry.

Log Levels
The logs generated will include different log levels such as INFO, ERROR, WARN, and CRITICAL.

License
This project is licensed under the MIT License.