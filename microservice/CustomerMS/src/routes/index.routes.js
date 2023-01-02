const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(201).json({ success: true, message: "welocome to BidTo-Api" })
})

module.exports = router;