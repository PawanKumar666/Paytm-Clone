const router = require("express").Router();

router.use("/search-user", require("./SearchUser"));
router.use("/get-all-users", require("./GetAllUsers"));

module.exports = router;