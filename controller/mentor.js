const MENTOR = require('../module/mentor')
const FAN = require('../module/fan')
const USER = require('../module/user')
const LEARNING_CENTER = require('../module/learning_center')


exports.createOne = async(req, res, next) => {
    const result = new MENTOR({
        mentor_ID: req.body.mentor_ID,
        lc_ID: req.body.lc_ID,
        fan_ID: req.body.fan_ID
    });
    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentor/index')
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await MENTOR.find().sort({
            date: -1
        })
        .populate(['lc_ID', 'fan_ID', 'mentor_ID']);
    // res.json(result)
    res.render("./admin/mentor/index", {
        layout: "./admin",
        result
    })
};
exports.update = async(req, res, next) => {

    const result = await MENTOR.findByIdAndUpdate(req.param.id);
    result.mentor_ID = req.body.mentor_ID;
    result.lc_ID = req.body.lc_ID;
    result.fan_ID = req.body.fan_ID

    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentor/index')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await MENTOR.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/mentor/index')
};