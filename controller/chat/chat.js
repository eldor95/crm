const CHAT = require('../../module/chat/chat')

exports.create = async(req, res, next) => {
    const result = new CHAT({
        name: req.body.name,
        mentor_ID: req.body.mentor_ID,
        group_ID: req.body.group_ID,
    })
    result.save().then(() => {
        res.json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
};


exports.getAll = async(req, res, next) => {
    const result = await CHAT.find().sort({
            date: -1
        })
        .populate(['mentor_ID', 'group_ID']);
    res.json(result)
};
exports.update = async(req, res, next) => {

    const result = await CHAT.findByIdAndUpdate(req.param.id);
    result.name = req.body.name;
    result.mentor_ID = req.body.mentor_ID;
    result.group_ID = req.body.group_ID;

    result.save().then(() => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
};
exports.delete = async(req, res, next) => {
    await CHAT.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        data: []
    })
};