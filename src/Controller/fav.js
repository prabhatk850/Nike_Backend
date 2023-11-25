const FavoritedetailModel = require("../Database/favorite");

const addfavorite = async (req, res) => {
    const userid = req.user._id;
    const Favoritedetail = FavoritedetailModel({
        name: req.body.name,
        type: req.body.type,
        heading: req.body.heading,
        colourways: req.body.colourways,
        price: req.body.price,
        pic: req.body.pic,
        logo: req.body.logo,
        userid: userid,
    });
    
    await Favoritedetail.save()
        .then((result) => {
        res.send(result);
        })
        .catch((error) => {
        console.log("error from addfav", error);
        });
}

const viewfavorite = (req, res) => {
    FavoritedetailModel.find({ userid: req.user._id })
        .then((result) => {
        res.send(result);
        })
        .catch((error) => {
        console.log("error from get fav", error);
        });
}
    
module.exports = { addfavorite , viewfavorite }