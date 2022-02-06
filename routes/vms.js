const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send([{name: "vm1", os: "linux", }, {name: "vm2", os: "windows"}])
})

module.exports = router;
