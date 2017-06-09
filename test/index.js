const db = require('../db')
const co = require('co')

const manualFixtures = require('../test/fixtures/manuals')
const stepFixtures = require('../test/fixtures/steps')

co(function*() {
  yield db.models.manual
    .destroy({
      cascade: true,
      truncate: true,
      restartIdentity: true
    })

  yield db.models.step
    .destroy({
      cascade: true,
      truncate: true,
      restartIdentity: true
    })

  yield db.models.manual
    .bulkCreate(manualFixtures)

  yield db.models.step
    .bulkCreate(stepFixtures)

  const manuals = yield db.models.manual.all()
  console.log('manuals is: ', manuals)
})
