const ensureAuthenticated = require('../Middlewares/Auth');


const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log("user details", req.user);
    res.status(200).json([
        {
            name: "mobile",
            price:1000
        },
        {
            name: "tv",
            price:10000
        }
    ])
});

module.exports = router;
