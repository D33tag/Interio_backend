const multer = require('multer');
const {cloudinaryStorage} = require ('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

const storage = new cloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'products', 
        allowed_formats:['jpg', 'png', 'jpeg'],
        transformation: [{
            width: 500,
            height: 500,
            crop: 'limit',
        }],
    },
});

const parser = multer({ storage: storage});

module.exports = parser;