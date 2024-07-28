const { Router } = require("express");

const router = Router();

router.post("/", (req, res) => {
    // This needs to be improved
    return res.status(200).json({ message: "Signed out" });
});

module.exports = router;