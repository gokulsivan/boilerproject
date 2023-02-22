const uploadService = require('./uploadAwsService');
const multer = require("multer");
// const { s3Uploadv2, s3Uploadv3 } = require("./s3Service");
const uuid = require("uuid").v4;

module.exports.uploadSingle = async (req,res) => {
        const image = req.file;
        const name = req.body.name;
        // console.log(image);

        try {
           
              const results = await uploadService.uploadToBucket(image,'projects/coverImages/');
              let imagekey = results.Key;
            console.log(imagekey);
              return res.json({ status: "success" });
        }catch (err) {
                console.log(err);
    }
} 

 // const storage = multer.memoryStorage();

            // // const fileFilter = (req, file, cb) => {
            // // if (file.mimetype.split("/")[0] === "image") {
            // //     cb(null, true);
            // // } else {
            // //     cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
            // // }
            // // };
            // const upload = multer({
            //     storage,
            //     // fileFilter,
            //     // limits: { fileSize: 1000000000, files: 2 },
            //   });
           // const file = await upload.single("files");