const MENTOR = require('../module/mentor')
const MENTORS_GROUP = require('../module/mentors_group')
const MENTORS_FORM = require('../module/mentors_form')
const MENTORS_THEME = require('../module/mentors_theme')
const MENTORS_COLLECTION = require('../module/mentors_collection')


exports.createOne = async(req, res, next) => {
    const result = new MENTORS_COLLECTION({
        mentors_form_ID: req.body.mentors_form_ID,
        mentor_ID: req.body.mentor_ID,
        mentors_group_ID: req.body.mentors_group_ID,
        mentors_theme_ID: req.body.mentors_theme_ID,
        collection_name: req.body.collection_name

    });
    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentors_collection/index')
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await MENTORS_COLLECTION.find().sort({
            date: -1
        })
        .populate(['mentors_group_ID', 'mentor_ID', 'mentors_form_ID']);
    // res.json(result)
    res.render("./admin/mentors_collection/index", {
        layout: "./admin",
        result
    })
};
exports.getOne = async(req, res, next) => {

    const result = await MENTORS_COLLECTION.findById(req.params.id)
    res.render("./admin/mentors_collection/update", {
        layout: "./admin",
        result
    });
};
exports.update = async(req, res, next) => {

    const result = await MENTORS_COLLECTION.findByIdAndUpdate(req.param.id);
    result.mentor_ID = req.body.mentor_ID;
    result.mentors_group_ID = req.body.mentors_group_ID;
    result.mentors_form_ID = req.body.mentors_form_ID;
    result.mentors_theme_ID = req.body.mentors_theme_ID,
        result.collection_name = req.body.collection_name,

        result.save().then(() => {
            // res.json(result)
            res.redirect('/mentors_collection/index')
        }).catch((err) => {
            res.json(err)
        })
};
exports.deleteOne = async(req, res, next) => {
    await MENTORS_COLLECTION.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/mentors_collection/index')
};