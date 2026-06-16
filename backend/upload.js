const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'drivadys9',
  api_key: '237297463683252',
  api_secret: '0hrUzOh5UtfxgAr3-rMFlgx82Wg'
});

const videoPath = '../frontend/public/introvideo.mp4';

cloudinary.uploader.upload(videoPath, { resource_type: "video" }, (error, result) => {
  if (error) {
    console.error("Error uploading to Cloudinary:", error);
  } else {
    console.log("Upload successful!");
    console.log("URL:", result.secure_url);
  }
});
