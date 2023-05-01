const products = [];

const getAll = (req, res) => {
    return res.status(200).json({ products});
}

module.exports = {
    getAll
}