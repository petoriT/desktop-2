const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploads = (file, folder) => {
  return new Promise((resolve) => {
    console.log(file)
    cloudinary.uploader.upload(
      file,
      (result) => {
        console.log(result)
        resolve({
          url: result.url,
          id: result.public_id,
        });
      },
      {
        resource_type: "auto",
        folder: folder,
      }
    );
  });
};

exports.remover = (public_id, res) => {
  cloudinary.uploader.destroy(public_id, (result) => {
    res.status(200).json({
      message: "picture deleted",
      data: result,
    });
  });
};
