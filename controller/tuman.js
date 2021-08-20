const TUMAN = require('../module/tuman')
const VILOYAT = require('../module/viloyat')

exports.createOne = async(req, res, next) => {
    const result = new TUMAN({
        name: req.body.name,
        viloyat_ID: req.body.viloyat_ID
    });
    result.save().then(() => {
        res.json(result)
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await TUMAN.find().sort({
            date: -1
        })
        .populate(['viloyat_ID']);
    res.json(result)
};
exports.update = async(req, res, next) => {
    const result = await TUMAN.findByIdAndUpdate(req.param.id);
    result.name = req.body.name;
    result.viloyat_ID = req.body.viloyat_ID;
    result.save().then(() => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await TUMAN.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        data: []
    })
};