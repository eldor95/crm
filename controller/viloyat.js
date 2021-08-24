const VILOYAT = require('../module/viloyat')

exports.createOne = async(req, res, next) => {
    const result = new VILOYAT({
        name: req.body.name,
    })


    result.save().then(() => {
        // res.json(result)
        res.redirect('/viloyat/getAll')
    }).catch((error) => {
        res.json(error)
    })
};
exports.getAll = async(req, res, next) => {
    const result = await VILOYAT.find()
    res.render("./admin/viloyat/index", {
            layout: "./admin",
            result
        })
        // res.json(result)
};
exports.getOne = async(req, res, next) => {

    const result = await VILOYAT.findById(req.params.id)
    res.render("./admin/viloyat/update", {
        layout: "./admin",
        result
    });
};
exports.updateOne = async(req, res, next) => {
    const result = await VILOYAT.findByIdAndUpdate(req.param.id);
    result.name.uz = req.body.nameuz;
    result.name.ru = req.body.nameru;
    result.name.en = req.body.nameen;
    result.save().then(() => {
        // res.json(result)
        res.redirect('/viloyat/getAll')
    }).catch((err) => {
        res.json(err)
    })
};
exports.deleteOne = async(req, res, next) => {
    await VILOYAT.findByIdAndDelete(req.params.id)
        // res.status(200).json({
        //     success: true,
        //     data: []
        // })
    res.redirect('/viloyat/getAll')
};