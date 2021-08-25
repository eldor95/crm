const FAN = require('../module/fan')
const USER = require('../module/user')
const LEARNING_CENTER = require('../module/learning_center')


exports.createOne = async(req, res, next) => {
    const result = new FAN({
        name: req.body.name,
        lc_ID: req.body.lc_ID,
        diler_ID: req.body.diler_ID
    });
    result.save().then(() => {
        // res.json(result)
        res.redirect('/fan/getAll')
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const user = await USER.find()
    const learning_center = await LEARNING_CENTER.find()
    const result = await FAN.find().sort({
            date: -1
        })
        .populate(['lc_ID', 'diler_ID']);
    // res.json(result)
    res.render("./admin/fan/index", {
        layout: "./admin",
        result,
        user,
        learning_center
    })
};

exports.getOne = async(req, res, next) => {

    const result = await FAN.findById(req.params.id)
    const user = await USER.find()
    const learning_center = await LEARNING_CENTER.find()
    res.render("./admin/fan/update", {
        layout: "./admin",
        result,
        user,
        learning_center
    });
};

exports.update = async(req, res, next) => {

    const result = await FAN.findByIdAndUpdate(req.params.id);

    result.name = req.body.name;
    result.lc_ID = req.body.lc_ID;
    result.diler_ID = req.body.diler_ID;

    result.save().then(() => {
        // res.json(result)
        res.redirect('/fan/getAll')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await FAN.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })

    res.redirect('/fan/getAll')
};