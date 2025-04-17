# Image to Data URI Converter

A simple, elegant web application that converts images to Data URIs for use in web development.

## Features

- Drag and drop file upload
- Support for PNG, JPEG, GIF, BMP, WEBP formats
- File size validation (max 20MB)
- Image preview with click-to-upload functionality
- Data URI conversion with copy to clipboard
- Mobile-responsive design
- "Add to Home Screen" functionality for PWA installation
- Share button (visible on desktop only)

## How to Use Locally

1. Download and extract all files to a directory on your computer
2. Open the `index.html` file in a web browser
3. Drag and drop an image onto the upload area or click to select a file
4. Click the "Convert" button to generate the Data URI
5. Use the "Copy URI" button to copy the Data URI to your clipboard

## Mobile vs Desktop Experience

- On mobile devices, the share button is automatically hidden as mobile devices have native sharing capabilities
- On desktop devices, both the "Add to Home Screen" and "Share" buttons are visible
- The application is fully responsive and works on all screen sizes

## Google AdSense Integration

To add your Google AdSense:

1. Sign up for Google AdSense and get your publisher ID
2. Create ad units for each placement (top, bottom, left, right)
3. Replace the placeholder ad containers in the HTML with your actual AdSense code
4. Update the `loadGoogleAds()` function with your implementation

## Deployment

This application can be deployed as a static website to any hosting service, including:

- GitHub Pages
- Netlify
- Vercel
- Azure Static Web Apps
- Amazon S3

## Credits

© 2025 Richard Crane. All rights reserved.
