
//Controllers
const productsImagesControllers = require("../controllers/productsImages.controllers");

const postImages = (req, res) => {
  const file = req.files;
  const productId = req.params.id;

  if (!file?.image) return res.status(400).json({ message: "Missing data" });

  if (file.image.length) {
    productsImagesControllers.createImages(productId, file.image)
      .then(response => {
        return res.status(201).json({
          message: `Image created successfully`,
          image: response
        })
      })
      .catch(error => res.status(404).json({ message: error.message }));
  }
  else {
    productsImagesControllers.createImage(productId, file.image)
      .then(response => {
        return res.status(201).json({
          message: `Image created successfully`,
          image: response
        })
      })
      .catch(error => res.status(404).json({ message: error.message }));
  }
}

const deleteImage = (req, res) => {
  const productId = req.params.id;
  const data = req.body;

  if (!data.imageId) {
    return res.status(400).json({
      message: "CloudinaryId field must be completed"
    })
  }

  productsImagesControllers.deleteImage(productId, data.imageId)
    .then(response => {
      response
        ? res.status(204).json()
        : res.status(404).json({ message: "Invalid" })
    })
    .catch(error = () => {
      return res.status(400).json({ message: error.message });
    })
}

module.exports = {
  postImages,
  deleteImage
}