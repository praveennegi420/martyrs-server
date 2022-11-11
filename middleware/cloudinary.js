require('dotenv').config({ path: '../.env' })
const cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name: 'diqcoeelb',
    api_key: '975636317114847',
    api_secret: '1rU4L2H_l5Rpau87A6V0fLZjQ0g'
});

module.exports = { cloudinary }