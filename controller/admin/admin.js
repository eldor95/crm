exports.dashboard = async(req, res, next) => {
    res.render("./admin/dashboard", {
        layout: "./admin",
    });
};