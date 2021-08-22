const MENTOR = require('../module/mentor')
    // const MENTORS_GROUP = require('../module/mentors_group')
    // const MENTORS_FORM = require('../module/mentors_form')
    // const MENTORS_THEME = require('../module/mentors_theme')
const MENTORS_AUDIO = require('../module/mentors_audio')

exports.createOne = async(req, res, next) => {
    const result = new MENTORS_AUDIO({
        mentors_form_ID: req.body.mentors_form_ID,
        mentor_ID: req.body.mentor_ID,
        mentors_group_ID: req.body.mentors_group_ID,
        mentors_theme_ID: req.body.mentors_theme_ID,
        audio_name: req.body.audio_name,
        audio_file: req.file.filename,
        audio_time: req.body.audio_time,

    });
    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentors_audio/index')
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await MENTORS_AUDIO.find().sort({
            date: -1
        })
        .populate(['mentors_group_ID', 'mentor_ID', 'mentors_form_ID']);
    // res.json(result)
    res.render("./admin/mentors_audio/index", {
        layout: "./admin",
        result
    })
};
exports.update = async(req, res, next) => {

    const result = await MENTORS_AUDIO.findByIdAndUpdate(req.param.id);
    result.mentor_ID = req.body.mentor_ID;
    result.mentors_group_ID = req.body.mentors_group_ID;
    result.mentors_form_ID = req.body.mentors_form_ID;
    result.mentors_theme_ID = req.body.mentors_theme_ID;
    result.audio_name = req.body.audio_name;
    result.audio_file = req.file.filename;
    result.audio_time = req.body.audio_time;

    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentors_audio/index')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await MENTORS_AUDIO.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/mentors_audio/index')
};