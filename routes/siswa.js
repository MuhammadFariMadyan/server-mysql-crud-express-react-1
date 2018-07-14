const express = require('express');
const router = express.Router();
const Op = require('sequelize').Op
const { all, find, create, update, destroy } = require('../controllers/siswaControllerApi.js')

  // 1 get all data siswa
  router.get('/', all);

  // 1.2 get data siswa with specific id
  router.get('/:id', find);

  // 2 post tambah data siswa
  router.post('/create', create);

  // 3 post ubah data siswa
  router.put('/:id', update);

  // 4 get delete data siswa
  router.delete('/:id', destroy);  

module.exports = router;