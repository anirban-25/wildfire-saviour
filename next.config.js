/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["1000logos.net", "www.providentins.com"],
  },
  env: {
    REACT_APP_FIREBASE_API_KEY: "AIzaSyBxfqobazw5lBf5GdUWOjCuPYz0KLZ5XcE",
    REACT_APP_FIREBASE_AUTH_DOMAIN: "wildfires-5aa96.firebaseapp.com",
    REACT_APP_FIREBASE_PROJECT_ID: "wildfires-5aa96",
    REACT_APP_FIREBASE_STORAGE_BUCKET: "wildfires-5aa96.appspot.com",
    REACT_APP_FIREBASE_SENDER_ID: "832366351480",
    REACT_APP_FIREBASE_APP_ID: "1:832366351480:web:20cfdb0c7de754186f498d",
  },
};

module.exports = nextConfig;
