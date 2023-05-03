
//Controllers
const productsImagesControllers = require("../controllers/productsImages.controllers");

const postImages = (req, res) => {
  const file = req.file;

  if (!file?.image) return res.status(400).json({ message: "Missing data" });

  productsImagesControllers.createImage(file)
    .then(response=>res.status(201).json({message:"Image added successfully"}))
    .catch(error=>res.status(400).json({message:error.message}))

}

module.exports={
  postImages
}