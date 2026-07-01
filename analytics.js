/**
 * Vercel Web Analytics Integration
 * This script initializes Vercel Web Analytics for tracking user interactions
 */
import { inject } from './node_modules/@vercel/analytics/dist/index.mjs';

// Initialize Web Analytics
inject({
  debug: false, // Set to true in development to see debug logs
  mode: 'auto' // Automatically detect environment
});
