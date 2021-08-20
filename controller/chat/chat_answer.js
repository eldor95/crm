const CHAT_ANSWER = require('../../module/chat/chat_answer')

exports.create = async(req, res, next) => {
    const result = new CHAT_ANSWER({
        chat_question_ID: req.body.chat_question_ID,
        answer: req.body.answer,
        file: req.file.filename,
        user_ID: req.body.user_ID,
    })
    result.save().then(() => {
        res.json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
};


exports.getAll = async(req, res, next) => {
    const result = await CHAT_ANSWER.find().sort({
            date: -1
        })
        .populate(['mentor_ID', 'group_ID']);
    res.json(result)
};
exports.update = async(req, res, next) => {

    const result = await CHAT_ANSWER.findByIdAndUpdate(req.param.id);
    result.answer = req.body.answer;
    result.chat_question_ID = req.body.chat_question_ID;
    result.file = req.file.filename;
    result.user_ID = req.body.user_ID;

    result.save().then(() => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await CHAT_ANSWER.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        data: []
    })
};