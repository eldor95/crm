const MENTOR = require('../module/mentor')
const MENTORS_GROUP = require('../module/mentors_group')
const MENTORS_FORM = require('../module/mentors_form')
const MENTORS_THEME = require('../module/mentors_theme')
const MENTORS_AUDIO = require('../module/mentors_audio')
const MENTORS_VIDEO = require('../module/mentors_video')

exports.createOne = async(req, res, next) => {
    const user_id = req.session.user._id
    const result = new MENTORS_VIDEO({
        mentors_form_ID: req.body.mentors_form_ID,
        mentor_ID: req.body.mentor_ID,
        mentors_group_ID: req.body.mentors_group_ID,
        mentors_theme_ID: req.body.mentors_theme_ID,
        video_name: req.body.video_name,
        video_file: req.file.filename,
        video_time: req.body.video_time,
        video_description: req.body.video_description,
    });
    result.save().then(() => {
        res.json(result)
            // res.redirect('/mentors_video/getAll')
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await MENTORS_VIDEO.find().sort({
            createdAt: -1
        })
        .populate(['mentors_form_ID'])
        .populate(['mentor_ID'])
        .populate(['mentors_group_ID'])
        .populate(['mentors_theme_ID'])
    res.json(result)

};
exports.getOne = async(req, res, next) => {

    const result = await MENTORS_VIDEO.findById(req.params.id)
    res.render("./admin/mentors_video/update", {
        layout: "./admin",
        result
    });
};
exports.update = async(req, res, next) => {

    const result = await MENTORS_VIDEO.findByIdAndUpdate(req.params.id);
    result.mentor_ID = req.body.mentor_ID;
    result.mentors_group_ID = req.body.mentors_group_ID;
    result.mentors_form_ID = req.body.mentors_form_ID;
    result.mentors_theme_ID = req.body.mentors_theme_ID;
    result.video_name = req.body.video_name;
    result.video_file = req.file.filename;
    result.video_time = req.body.video_time;

    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentors_video/getAll')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await MENTORS_VIDEO.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/mentors_video/getAll')
};