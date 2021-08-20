const CHAT_QUESTION = require('../../module/chat/chat_question')

exports.create = async(req, res, next) => {
    const result = new CHAT_QUESTION({
        question: req.body.name,
        chat_ID: req.body.mentor_ID,
        file: req.body.file,
        user_ID: req.body.user_ID,
    })
    result.save().then(() => {
        res.json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
};


exports.getAll = async(req, res, next) => {
    const result = await CHAT_QUESTION.find().sort({
            date: -1
        })
        .populate(['mentor_ID', 'group_ID']);
    res.json(result)
};
exports.update = async(req, res, next) => {

    const result = await CHAT_QUESTION.findByIdAndUpdate(req.param.id);
    result.question = req.body.name;
    result.chat_ID = req.body.mentor_ID;
    result.file = req.file.filename;
    result.user_ID = req.body.user_ID;

    result.save().then(() => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await CHAT_QUESTION.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        data: []
    })
};