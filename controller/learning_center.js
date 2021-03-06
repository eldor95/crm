const LEARNING_CENTER = require('../module/learning_center')
const VILOYAT = require('../module/viloyat')
const TUMAN = require('../module/tuman')
const USER = require('../module/user')


exports.createOne = async(req, res, next) => {
    const result = new LEARNING_CENTER({
        name: req.body.name,
        viloyat_ID: req.body.viloyat_ID,
        tuman_ID: req.body.tuman_ID,
        diler_ID: req.body.diler_ID
    });
    result.save()
        .then(() => {
            res.json(result)
        }).catch((error) => {
            res.json(error)
        })
};
exports.getAll = async(req, res, next) => {
    const viloyat = await VILOYAT.find()
    const tuman = await TUMAN.find()
    const result = await LEARNING_CENTER.find().sort({
            date: -1
        })
        .populate(['viloyat_ID', 'tuman_ID', 'diler_ID']);
    // res.json(result)
    res.render("./admin/learning_center/index", {
        layout: "./admin",
        result,
        viloyat,
        tuman
    })
};

exports.getOne = async(req, res, next) => {

    const result = await LEARNING_CENTER.findById(req.params.id)
    res.render("./admin/viloyat/update", {
        layout: "./admin",
        result
    });
};
exports.update = async(req, res, next) => {
    const result = await LEARNING_CENTER.findByIdAndUpdate(req.params.id);
    result.name = req.body.name;
    result.viloyat_ID = req.body.viloyat_ID;
    result.tuman_ID = req.body.tuman_ID;
    result.diler_ID = req.body.diler_ID;
    result.save().then(() => {
        // res.json(result)
        res.redirect('/learning_center/getAll')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await LEARNING_CENTER.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/learning_center/getAll')
};

exports.filter_uquv_markazi_diler = async(req, res, next) => {
    await LEARNING_CENTER.find({
            diler_ID: req.params.id
        }).populate(['diler_ID'])
        .exec(async(error, data) => {
            if (error) {
                throw error
            } else {
                res.json(data)
            }
        })
}