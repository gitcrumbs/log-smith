import os from 'os';

// Log data templates with log levels
const logData = [
  { level: 'INFO', message: 'User {user} successfully logged in from IP {ip} at {timestamp}.' },
  { level: 'ERROR', message: 'Error: Request {requestId} failed due to a server-side timeout at {timestamp}.' },
  { level: 'WARN', message: 'User {user} encountered a permission error while accessing resource {resource} at {timestamp}.' },
  { level: 'INFO', message: 'System alert: Unusual activity detected for user {user} from IP {ip} at {timestamp}.' },
  { level: 'INFO', message: 'Request {requestId} processed successfully in {duration}ms at {timestamp}.' },
  { level: 'INFO', message: 'Data synchronization for user {user} completed at {timestamp}, affected records: {recordCount}.' },
  { level: 'CRITICAL', message: 'Critical error: Database connection lost while handling request {requestId} at {timestamp}.' },
  { level: 'INFO', message: 'Server initiated a scheduled maintenance at {timestamp}, expected downtime: {downtime} minutes.' },
  { level: 'ERROR', message: 'API endpoint {endpoint} returned 404 for user {user} at {timestamp}.' },
  { level: 'INFO', message: 'Background job {jobId} started at {timestamp} and completed at {completionTime}.' },
  { level: 'WARN', message: 'Security warning: Failed login attempt detected for user {user} from IP {ip} at {timestamp}.' },
  { level: 'INFO', message: 'User {user} uploaded a file {fileName} of size {fileSize}MB at {timestamp}.' },
  { level: 'INFO', message: 'Transaction {transactionId} for user {user} processed successfully at {timestamp}, amount: ${amount}.' },
  { level: 'INFO', message: 'User {user} logged out from IP {ip} at {timestamp}.' },
  { level: 'INFO', message: 'System health check performed at {timestamp}, all services are operational.' },
  { level: 'WARN', message: 'Warning: Disk usage exceeded 90% on server {serverId} at {timestamp}.' },
  { level: 'ERROR', message: 'Background process {processId} encountered a memory leak at {timestamp}.' },
  { level: 'INFO', message: 'User {user} changed their password successfully at {timestamp}.' },
  { level: 'INFO', message: 'Login session for user {user} expired at {timestamp}.' },
  { level: 'INFO', message: 'Scheduled task {taskName} executed successfully at {timestamp}.' }
];

// Function to get the actual IP address
function getIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1'; // Fallback to localhost if no external IP is found
}

// Function to generate a random log entry
function generateRandomLog() {
  const user = `user${Math.floor(Math.random() * 1000)}`;
  const ip = getIPAddress();
  const requestId = `req${Math.floor(Math.random() * 10000)}`;
  const timestamp = new Date().toISOString();
  const resource = `resource${Math.floor(Math.random() * 100)}`;
  const duration = Math.floor(Math.random() * 1000);
  const recordCount = Math.floor(Math.random() * 1000);
  const downtime = Math.floor(Math.random() * 60);
  const endpoint = `/api/endpoint${Math.floor(Math.random() * 100)}`;
  const jobId = `job${Math.floor(Math.random() * 1000)}`;
  const completionTime = new Date(Date.now() + Math.floor(Math.random() * 10000)).toISOString();
  const fileName = `file${Math.floor(Math.random() * 100)}.txt`;
  const fileSize = Math.floor(Math.random() * 100);
  const transactionId = `txn${Math.floor(Math.random() * 10000)}`;
  const amount = (Math.random() * 1000).toFixed(2);
  const serverId = `server${Math.floor(Math.random() * 100)}`;
  const processId = `process${Math.floor(Math.random() * 1000)}`;
  const taskName = `task${Math.floor(Math.random() * 100)}`;

  const logTemplate = logData[Math.floor(Math.random() * logData.length)];
  const { level, message } = logTemplate;

  const logMessage = message
    .replace('{user}', user)
    .replace('{ip}', ip)
    .replace('{requestId}', requestId)
    .replace('{timestamp}', timestamp)
    .replace('{resource}', resource)
    .replace('{duration}', duration)
    .replace('{recordCount}', recordCount)
    .replace('{downtime}', downtime)
    .replace('{endpoint}', endpoint)
    .replace('{jobId}', jobId)
    .replace('{completionTime}', completionTime)
    .replace('{fileName}', fileName)
    .replace('{fileSize}', fileSize)
    .replace('{transactionId}', transactionId)
    .replace('{amount}', amount)
    .replace('{serverId}', serverId)
    .replace('{processId}', processId)
    .replace('{taskName}', taskName);

  return `LogSmith : ===> [${level}] ${logMessage}`;
}

// Function to generate logs based on a time interval in seconds
export function generateLogsByInterval(seconds) {
  const interval = seconds * 1000;
  setInterval(() => {
    console.log(generateRandomLog());
  }, interval);
}

// Function to generate a generic log entry
export function generateGenericLog() {
  return generateRandomLog();
}
