const USER = require('../module/user')
const path = require('path')
const sharp = require('sharp')
const md5 = require('md5')
const fs = require('fs')

exports.createOne = async(req, res, next) => {




    let compressedFile = path.join(__dirname, '../public/convert', md5(new Date().getTime()) + '.jpg') // Yangi rasm kiritish uchun ishlatiladi
    sharp(req.file.path)
        .resize(400, 400)
        .jpeg({
            quality: 100
        })
        .toFile(compressedFile, (error) => {
            if (error) {
                res.json(error)
            }
            fs.unlink(req.file.path, async(error) => {
                [] //origininal rasmni bazadan uchirib yuboradi
            })
        })




    const result = new USER({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        // balance: req.body.balance,
        // block: req.body.block,
        image: path.basename(compressedFile),
        // role: req.body.role,
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

    await USER.findById({ _id: req.params.id })
        .exec((error, data) => {
            if (error) {
                res.status(404).json({ success: false, error: error })
            } else {
                if (data.image) {
                    res.status(404).json({ success: false, error: error })
                }
                let filePath = path.join(__dirname, '../public/convert/' + data.image)

                fs.unlink(filePath, () => {
                    []
                })
            }
        })



    let compressedFile = path.join(__dirname, '../public/convert', md5(new Date().getTime()) + '.jpg')
    await sharp(req.file.path)
        .resize(400, 400)
        .jpeg({
            quality: 100
        })
        .toFile(compressedFile, (error) => {
            if (error) {
                res.send(error)
            }
            fs.unlink(req.file.path, async(error) => {
                []
            })
        })

    const result = await USER.findByIdAndUpdate(req.params.id);
    result.name = req.body.name;
    result.email = req.body.email;
    result.password = req.body.password;
    result.phone = req.body.phone;
    result.image = path.basename(compressedFile)

    result.save()
        .then(() => {
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