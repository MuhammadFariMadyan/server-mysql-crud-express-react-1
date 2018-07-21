const chai = require('chai')
const expect = chai.expect;
const chaiHttp = require('chai-http')
const app = require('../app.js')
const faker = require('faker')

chai.use(chaiHttp)
var siswaId;

describe('Siswa Crud', function(){
    it('Should create new Siswa', function(done){
        chai.request(app)
            .post('/siswa/create')
            .set('Authorization', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                nama: 'Fari',
                gender: 'Perempuan',
                no_telp: '0890708090',
                alamat: 'Rajabasa'
            })
            .end(function(err, res){
                expect(res).to.have.status(201);
                expect(res).to.be.json;
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal('Success Create Data Siswa');
                expect(res.body).to.have.property('data');                
                expect(res.body.data.nama).to.equal('Fari')
                expect(res.body.data.gender).to.equal('Perempuan')
                expect(res.body.data.no_telp).to.equal('0890708090')
                expect(res.body.data.alamat).to.equal('Rajabasa')
                
                siswaId = res.body.data.id;
                done();
            })
    })
    it('Should update Siswa', function(done){
        chai.request(app)
            .put(`/siswa/${siswaId}`)
            .set('Authorization', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                nama: 'Doni',
                gender: 'Pria',
                no_telp: '0890708090',
                alamat: 'Rajabasa'
            })
            .end(function(err, res){
                expect(res).to.have.status(201);
                expect(res).to.be.json;
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal('Success Update Data Siswa');
                expect(res.body).to.have.property('data');  

                expect(res.body.data.nama).to.equal('Doni')
                expect(res.body.data.gender).to.equal('Pria')
                expect(res.body.data.no_telp).to.equal('0890708090')
                expect(res.body.data.alamat).to.equal('Rajabasa')                                
                done();
            })
    })
    it('Should Delete Siswa', function(done){
        chai.request(app)
            .del(`/siswa/${siswaId}`)
            .set('Authorization', 'application/json')
            .set('Content-Type', 'application/x-www-form-urlencoded')            
            .end(function(err, res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.have.property('message');
                expect(res.body.message).to.equal('Success Delete Data Siswa');
                expect(res.body).to.have.property('data');  
                done();
            })
    })
})