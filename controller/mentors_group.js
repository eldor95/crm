const MENTOR = require('../module/mentor')
const MENTORS_GROUP = require('../module/mentors_group')
const FAN = require('../module/fan')
const LEARNING_CENTER = require('../module/learning_center')


exports.createOne = async(req, res, next) => {
    const result = new MENTORS_GROUP({
        name: req.body.name,
        mentor_ID: req.body.mentor_ID,
        lc_ID: req.body.lc_ID,
        fan_ID: req.body.fan_ID
    });
    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentors_group/getAll')
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const mentor = await MENTOR.find()
    const fan = await FAN.find()
    const learning_center = await LEARNING_CENTER.find()

    const result = await MENTORS_GROUP.find().sort({
            date: -1
        })
        .populate(['lc_ID', 'fan_ID', 'mentor_ID']);
    // res.json(result)
    res.render("./admin/mentors_group/index", {
        layout: "./admin",
        result,
        learning_center,
        fan,
        mentor
    })
};
exports.getOne = async(req, res, next) => {

    const result = await MENTORS_GROUP.findById(req.params.id)
    res.render("./admin/mentors_group/update", {
        layout: "./admin",
        result
    });
};
exports.update = async(req, res, next) => {

    const result = await MENTORS_GROUP.findByIdAndUpdate(req.params.id);
    result.mentor_ID = req.body.mentor_ID;
    result.lc_ID = req.body.lc_ID;
    result.fan_ID = req.body.fan_ID;
    result.name = req.body.name;

    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentors_group/getAll')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await MENTORS_GROUP.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/mentors_group/getAll')
};