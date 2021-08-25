const MENTORS_TEST = require('../module/mentors_test')

exports.createOne = async(req, res, next) => {
    const result = new MENTORS_TEST({
        question: req.body.question,
        options: {
            a: req.body.options_a,
            b: req.body.options_b,
            c: req.body.options_c,
            d: req.body.options_d,
        },
        answer: req.body.answer,


    });
    result.save()
        .then(() => {
            // res.json(result)
            res.redirect('/mentors_test/index')
        })
        .catch((error) => {
            res.json(error)
        })
};
exports.getAll = async(req, res, next) => {
    const result = await MENTORS_TEST.find()
        // res.json(result)
    res.render("./admin/mentors_test/index", {
        layout: "./admin",
        result
    })
};
exports.getOne = async(req, res, next) => {

    const result = await MENTORS_TEST.findById(req.params.id)
    res.render("./admin/mentors_test/update", {
        layout: "./admin",
        result
    });
};
exports.update = async(req, res, next) => {

    const result = await MENTORS_TEST.findByIdAndUpdate(req.params.id);
    result.question = req.body.question;
    result.options.a = req.body.options_a;
    result.options.b = req.body.options_b;
    result.options.c = req.body.options_c;
    result.options.d = req.body.options_d;
    result.answer = req.body.answer;
    result.score = req.body.score;
    result.status = req.body.status;

    result.save().then(() => {
        // res.json(result)
        res.redirect('/mentors_test/index')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await MENTORS_TEST.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/mentors_test/index')
};