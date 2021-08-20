const VILOYAT = require('../module/viloyat')

exports.createOne = async(req, res, next) => {
    const result = new VILOYAT({
        name: req.body.name,
    });
    result.save().then(() => {
        res.json(result)
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await VILOYAT.find()
    res.json(result)
};
exports.updateOne = async(req, res, next) => {
    const result = await VILOYAT.findByIdAndUpdate(req.param.id);
    result.name = req.body.name;
    result.save().then(() => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await VILOYAT.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        data: []
    })
};