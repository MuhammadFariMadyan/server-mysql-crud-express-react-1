const router = require('express').Router();
const Op = require('sequelize').Op;

router.get('/', (req, res, next) => {
    res.json({ message: 'Welcome to Portal Siswa'})
});

module.exports = router;