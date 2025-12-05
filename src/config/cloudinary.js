// Cloudinary configuration and helper functions

// Get Cloudinary cloud name from environment variable, fallback to default
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dcfe3424s';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}`;
const CLOUDINARY_IMAGE_URL = `${CLOUDINARY_BASE_URL}/image/upload`;
const CLOUDINARY_VIDEO_URL = `${CLOUDINARY_BASE_URL}/video/upload`;

// Optional: If you need to use specific version numbers, set this
// Leave empty string to use latest version
const CLOUDINARY_VERSION = import.meta.env.VITE_CLOUDINARY_VERSION || '';

/**
 * Converts a local file path to Cloudinary URL
 * Handles spaces and special characters in filenames
 */
export const getCloudinaryUrl = (localPath, isVideo = false) => {
  // Remove leading slash if present
  const cleanPath = localPath.startsWith('/') ? localPath.slice(1) : localPath;
  
  // Replace spaces with underscores for Cloudinary
  const cloudinaryPath = cleanPath.replace(/\s+/g, '_');
  
  // Determine if it's a video or image
  const baseUrl = isVideo ? CLOUDINARY_VIDEO_URL : CLOUDINARY_IMAGE_URL;
  
  // Build URL with optional version
  if (CLOUDINARY_VERSION) {
    return `${baseUrl}/v${CLOUDINARY_VERSION}/${cloudinaryPath}`;
  }
  
  // Return Cloudinary URL (without version - Cloudinary will use latest)
  return `${baseUrl}/${cloudinaryPath}`;
};

/**
 * Helper function to get image URL from local path
 * Automatically detects if it's a video file
 * Checks imageMap first for custom mappings
 */
export const getImageUrl = (localPath) => {
  // Check if there's a specific mapping first
  if (imageMap[localPath]) {
    return imageMap[localPath];
  }
  
  // Check if it's a video file
  const isVideo = /\.(mp4|webm|mov|avi)$/i.test(localPath);
  return getCloudinaryUrl(localPath, isVideo);
};

/**
 * Image mapping for specific files that might have different Cloudinary paths
 * Add files here if they have different names in Cloudinary or need specific versions
 * 
 * Example:
 * '/Giga Mall_.png': 'https://res.cloudinary.com/dcfe3424s/image/upload/v1764942385/Giga_Mall_xkykpq.png',
 */
export const imageMap = {
  // Add specific mappings here if any files have different Cloudinary paths
  // Format: '/local-path': 'full-cloudinary-url'
};

/**
 * Get URL with fallback to mapping, then Cloudinary conversion
 * This is an alias for getImageUrl for consistency
 */
export const getAssetUrl = (localPath) => {
  return getImageUrl(localPath);
};

