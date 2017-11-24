let chai = require('chai');
let chaiHttp = require('chai-http');
let service = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Authentication', () => {
  describe('/POST /auth/users/ldap', () => {
      it('it should authenticate a user against the LDAP server', (done) => {
        let user = {
          'username': process.env.TEST_USER,
          'password': process.env.TEST_PASS
        }
        chai.request(service)
            .post('/auth/users/ldap')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object')
                res.body.should.have.property('text').eql('Login successful')
                res.body.should.have.property('success').eql(true)
                res.body.should.have.property('token')
              done();
            });
      });
  });

});
