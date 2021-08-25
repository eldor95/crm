const MENTOR = require('../module/mentor')
const MENTORS_GROUP = require('../module/mentors_group')
const MENTORS_FORM = require('../module/mentors_form')


exports.createOne = async(req, res, next) => {
    const result = new MENTORS_FORM({
        name: req.body.name,
        mentor_ID: req.body.mentor_ID,
        mentors_group_ID: req.body.mentors_group_ID,

    });
    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentors_form/index')
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await MENTORS_FORM.find().sort({
            date: -1
        })
        .populate(['mentors_group_ID', 'mentor_ID']);
    // res.json(result)
    res.render("./admin/mentors_form/index", {
        layout: "./admin",
        result
    })
};
exports.getOne = async(req, res, next) => {

    const result = await MENTORS_FORM.findById(req.params.id)
    res.render("./admin/mentors_form/update", {
        layout: "./admin",
        result
    });
};
exports.update = async(req, res, next) => {

    const result = await MENTORS_FORM.findByIdAndUpdate(req.params.id);
    result.mentor_ID = req.body.mentor_ID;
    result.mentors_group_ID = req.body.mentors_group_ID;
    result.name = req.body.name;

    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentors_form/index')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await MENTORS_FORM.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/mentors_form/index')
};