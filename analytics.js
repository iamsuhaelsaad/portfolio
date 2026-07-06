/**
 * Vercel Web Analytics Integration for Static Sites
 * This script initializes the analytics queue and loads Vercel's tracking script
 * 
 * For static HTML sites, Vercel Analytics works by:
 * 1. Initializing a queue function (window.va) to capture early events
 * 2. Loading the actual tracking script from /_vercel/insights/script.js when deployed
 * 
 * This approach doesn't require the @vercel/analytics package to be bundled,
 * as the tracking functionality is provided by Vercel's infrastructure when deployed.
 */

// Initialize the analytics queue function
// This captures any analytics calls made before the main script loads
window.va = window.va || function () { 
  (window.vaq = window.vaq || []).push(arguments); 
};

// Note: The actual tracking script (/_vercel/insights/script.js) is loaded
// via a script tag in index.html and is automatically provided by Vercel
// when the site is deployed to their platform.
