const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe("Iot Application Testing", () => {
  describe("GET /sensordata", () => {
    it("should get all grouped data", (done) => {
      chai.request(app)
        .get('/sensordata')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  }),
  describe("GET /salarytable", () => {
    it("should render view salary table", (done) => {
      chai.request(app)
        .get('/salarytable')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  }),
  describe("GET /sensor", () => {
    it("should render view sensor chart", (done) => {
      chai.request(app)
        .get('/sensor')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });;
});