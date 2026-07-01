/**
 * Vercel Speed Insights Integration
 * This script initializes Vercel Speed Insights for tracking page performance
 */
import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false, // Set to true in development to see debug logs
  sampleRate: 1.0 // Track 100% of page views
});
