require('chai').should()
const request = require('supertest')

const app = require('../../api')
const manualFixtures = require('../fixtures/manuals')
const stepFixtures = require('../fixtures/steps')

describe('CRUD api tests', function() {
  it('GET first manual', function(done) {
    request(app.listen())
      .get('/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({ body }) => {
        body
          .should.be.an('object')
          .that.include( manualFixtures[0] )

        body.steps[0]
          .should.be.an('object')
          .that.nested.include({ body: stepFixtures[0].body })

      })
      .end(function(err) {
        if (err) throw err
        done()
      })
  })

  it('GET second manual', function(done) {
    request(app.listen())
      .get('/2')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(({ body }) => {
        body
          .should.be.an('object')
          .that.includes({
            id: 2,
            url: 'second-url',
            title: 'Second url'
          })
      })
      .end(function(err) {
        if (err) throw err
        done()
      })
  })
})
