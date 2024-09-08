const multer  = require('multer')
const upload = multer({ dest: './Uploads' })

// const imgUpload = async (req, res ,next) => {
//     try {
//         console.log(req.body);
        
//         upload.single(req.body.img);
//         next();        

//     } catch (error) {
//         console.log("Unable to upload proejct image", error);
//         res.status(504).send("Unable to upload proejct image", error);
//     }
// }

const imgUpload = (req, res, next) => {
    upload.single('img')(req, res, function (error) {
        if (error) {
            console.error("Unable to upload project image", error);
            return res.status(500).send("Unable to upload project image");
        }
        console.log("File uploaded successfully", req.file);
        next();
    });
};

module.exports = imgUpload;
