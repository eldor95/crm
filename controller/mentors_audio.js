const MENTORS_AUDIO = require('../module/mentors_audio')
const path = require('path')
const fs = require('fs')

exports.createOne = async(req, res, next) => {

    const user = req.session.user
    if (!req.session.user) {
        res.json("avval  avtorizatsiyadan oting")
    } else if (req.session.user.role != "mentor") {
        res.json("Siz mentor emassiz")
    } else {
        const result = new MENTORS_AUDIO({
            mentors_form_ID: req.body.mentors_form_ID,
            mentor_ID: user._id,
            mentors_group_ID: req.body.mentors_group_ID,
            mentors_theme_ID: req.body.mentors_theme_ID,
            audio_name: req.body.audio_name,
            audio_file: req.file.filename,
            audio_time: req.body.audio_time,

        });
        result.save().then(() => {
            res.json(result)
        }).catch((error) => {
            res.json(error)
        })
    }

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
exports.getOne = async(req, res, next) => {

    const result = await MENTORS_AUDIO.findById(req.params.id)
    res.render("./admin/mentors_audio/update", {
        layout: "./admin",
        result
    });
};
exports.update = async(req, res, next) => {
    const user = req.session.user
    if (!user) {
        res.json("avval  avtorizatsiyadan oting")
    } else if (user.role != "mentor") {
        res.json("Siz mentor emassiz")
    } else {
        // eski faylni ochiradi, ammo malumotni emas
        await MENTORS_AUDIO.findById({
            _id: req.params.id
        }).exec((error, data) => {
            if (error) {
                res.send(error);
            } else {
                const filePath = path.join(__dirname, "../public/audio/" + data.audio_file);
                fs.unlink(filePath, async(err) => {
                    []
                });
            }
        });
        // yangi fayni yuklash
        const result = await MENTORS_AUDIO.findByIdAndUpdate(req.params.id);
        result.audio_file = req.file.filename;
        result.save().then(() => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        })
    }
};
exports.deleteOne = async(req, res, next) => {
    const user = req.session.user
    if (!user) {
        res.json("avval  avtorizatsiyadan oting")
    } else if (user.role != "mentor") {
        res.json("Siz mentor emassiz")
    } else {
        // eski faylni ochiradi, ammo malumotni emas
        await MENTORS_AUDIO.findById(req.params.id).exec(async(error, data) => {
            if (error) {
                res.send(error);
            } else {
                const filePath = path.join(__dirname, "../public/audio/" + data.audio_file);
                fs.unlink(filePath, async(err) => {
                    []
                });
                await MENTORS_AUDIO.findByIdAndDelete(req.params.id)
                res.json("malomot ochirildi")
            }
        });

    }


};