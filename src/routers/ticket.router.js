const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.all("/", (req, res, next) => {
  res.json({ message: "return from ticket router" });
});

module.exports = router;
