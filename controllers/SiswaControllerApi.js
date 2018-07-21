const models = require('../models');
const Op = require('sequelize').Op

module.exports = {
    all: (req,res) => {
        models.siswas.all().then(siswaAll => {
          res.status(200).json({
            message: 'Success Read All Siswa',
            data: siswaAll
          })
        }).catch((err) => {
          res.status(500).json({
            message: 'Something Went Wrong'
          })
        })    
      },
      find: (req, res)  => {
        const { id } = req.params
        models.siswas.findOne({
          where: { id: id}
        }).then(siswa => {             
          res.status(200).json({
              message: 'Success Read Data Siswa',
              data: siswa
            })          
        }).catch((err) => {
          res.status(500).json({
            message: 'Something went wrong'
          })
        })
      },
      create: (req, res) => {
        const { nama, gender, no_telp, alamat  } = req.body                
        models.siswas.create({
          nama,
          gender,
          no_telp,
          alamat
        }).then((siswa) => {
          res.status(201).json({
            message: 'Success Create Data Siswa',
            data: siswa
          })
        }).catch((err) => {
          if (err.errors[0].message) {
            const message = err.errors[0].message
            res.status(403).json({
              message: message,
            })
          } else {
            res.status(500).json({
              message: 'Something Went Wrong',
            })
          }
        })
      },
      update: (req, res) => {
        const { id } = req.params
        const { nama, gender, no_telp, alamat } = req.body
        // console.log('id : '+req.params)
        // console.log(req.body)
        models.siswas.findOne({
          where: { id: id}
        }).then((siswa) => { 
            siswa.update({
                nama,
                gender,
                no_telp,
                alamat
            }).then((siswa) => {
                res.status(201).json({
                    message: 'Success Update Data Siswa',
                    data: siswa
                  })
            }).catch((err) => {
              if (err.errors[0].message) {
                const message = err.errors[0].message
                res.status(403).json({
                  message: message,
                })
              } else {
                res.status(500).json({
                  message: 'Something Went Wrong',
                })
              }
            }) 
        }).catch((err) => {
          res.status(500).json({
            message: 'Something Went Wrong',
          })
        })
      },
      destroy: (req, res) => {
        const { id } = req.params
        models.siswas.findOne({
          where: {
            id: id
          }
        }).then((siswa) => {
          siswa.destroy().then(() => {
            res.status(200).json({
              message: 'Success Delete Data Siswa',
              data: siswa
            })
          }).catch((err) => {
            res.status(500).json({
              message: 'Something Went Wrong',
            })
          })
        }).catch((err) => {
          res.status(500).json({
            message: 'Something Went Wrong',
          })
        })
      },
};

