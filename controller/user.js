const USER = require('../module/user')

exports.createOne = async(req, res, next) => {
    const result = new USER({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        balance: req.body.balance,
        block: req.body.block,
        // image: req.file.filename,
        role: req.body.role,
    });
    result.save().then(() => {
        // res.json(result)
        res.redirect('/user/getAll')

    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await USER.find()
        // res.json(result)
    res.render("./admin/user/index", {
        layout: "./admin",
        result
    })
};
exports.getOne = async(req, res, next) => {

    const result = await USER.findById(req.params.id)
    res.render("./admin/user/update", {
        layout: "./admin",
        result
    });
};
exports.update = async(req, res, next) => {

    const result = await USER.findByIdAndUpdate(req.params.id);
    result.name = req.body.name;
    result.email = req.body.email;
    // result.password = req.body.password;
    result.phone = req.body.phone;
    result.balance = req.body.balance;
    result.block = req.body.block;
    // result.image = req.body.image;
    result.role = req.body.rolel;

    result.save().then(() => {
        // res.json(result)
        res.redirect('/user/getAll')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await USER.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/user/getAll')
};
exports.filtre_diler = async(req, res, next) => {
    await USER.find({
            role: {
                $in: 'diler'
            }
        })
        .exec(async(error, data) => {
            if (error) {
                throw error
            } else {
                res.json(data)
            }
        })
};
exports.filter_student = async(req, res, next) => {
    await USER.find({
        role: {
            $in: 'student'
        }
    }).exec(async(error, data) => {
        if (error) {
            throw error
        } else {
            res.json(data)
        }
    })
}