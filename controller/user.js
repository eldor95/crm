const USER = require('../module/user')

exports.createOne = async(req, res, next) => {
    const result = new MENTORS_VIDEO({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        balance: req.body.balance,
        block: req.body.block,
        image: req.body.image,
        role: req.body.role,
    });
    result.save().then(() => {
        res.json(result)
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await MENTORS_VIDEO.find()
    res.json(result)
};
exports.update = async(req, res, next) => {

    const result = await MENTORS_VIDEO.findByIdAndUpdate(req.param.id);
    result.name = req.body.name;
    result.email = req.body.email;
    result.password = req.body.password;
    result.phone = req.body.phone;
    result.balance = req.body.balance;
    result.block = req.body.block;
    result.image = req.body.image;
    result.role = req.body.rolel;

    result.save().then(() => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await MENTORS_VIDEO.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        data: []
    })
};