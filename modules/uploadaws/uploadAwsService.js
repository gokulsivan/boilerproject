// const AWS = require('aws-sdk');
// const { v4 } = require('uuid');

// const s3 = new AWS.S3({
//   accessKeyId: process.env.S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//   region: process.env.S3_REGION,
// });


// module.exports.s3Upload = async (file,filename) => {
   
//     try {
       
//         const param =  {
//               Bucket: process.env.S3_BUCKET_NAME,
//               Key: filename + v4(),
//               ContentType: "image/*",
//               Body: file.buffer,
//         }
//         const result =  s3.upload(param);
//         console.log(result);
//         return result ;
        
//         //   return await Promise.all(params.map((param) => s3.upload(param).promise()));
//         }catch(err){
//             console.log( err);
//         }

//     }


'use strict';

const AWS = require('aws-sdk');
const { v4 } = require('uuid');

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_REGION,
});

exports.uploadToBucket = async (file, dir) => {
	const params = {
		Bucket: process.env.S3_BUCKET,
		Key: dir + v4(),
		ContentType: "image/*",
		Body: file.buffer,
	};
    let results =await s3.upload(params).promise();
    // console.log(results);
    return results;
    
}
 // try {
    // const storage = multer.memoryStorage();
    // const s3 = new S3()

    // const param = {
    //     Bucket: process.env.AWS_BUCKET_NAME,
    //     Key: 'uploads/${file.orginalname}',
    //     Body: file.buffer
    
    // };   
    // return await s3.upload(param).promise();
