const multer  = require('multer')
const upload = multer({ dest: './Uploads' })

const imgUpload = (req, res, next) => {
    console.log("Multer -> ", req.body);
    upload.single('img' || 'profileImage')(req, res, function (error) {
        if (error) {
            console.error("Unable to upload project image", error);
            return res.status(500).send("Unable to upload project image");
        }
        console.log("File uploaded successfully", req.file);
        next();
    });
};

module.exports = imgUpload;


