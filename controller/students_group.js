const MENTOR = require('../module/mentor')
const MENTORS_GROUP = require('../module/mentors_group')
const STUDENTS_GROUP = require('../module/students_group')


exports.createOne = async(req, res, next) => {
    const result = new STUDENTS_GROUP({
        student_ID: req.body.student_ID,
        mentor_ID: req.body.mentor_ID,
        group_ID: req.body.group_ID,

    });
    result.save().then(() => {
        // res.json(result)
        res.redirect('/students_group/getAll')
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await STUDENTS_GROUP.find().sort({
            date: -1
        })
        .populate(['group_ID', 'mentor_ID', 'students_group']);
    // res.json(result)
    res.render("./admin/students_group/index", {
        layout: "./admin",
        result
    })
};
exports.update = async(req, res, next) => {

    const result = await STUDENTS_GROUP.findByIdAndUpdate(req.param.id);
    result.mentor_ID = req.body.mentor_ID;
    result.group_ID = req.body.group_ID;
    result.student_ID = req.body.student_ID;

    result.save().then(() => {
        // res.json(result)
        res.redirect('/students_group/getAll')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await STUDENTS_GROUP.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/students_group/getAll')
};