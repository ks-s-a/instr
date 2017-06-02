const db = require('../db')
const co = require('co')

const manualFixtures = require('../test/fixtures/manuals')

co(function*() {
  yield db.models.manual
    .destroy({
      truncate: true,
      restartIdentity: true
    })

  yield db.models.manual
    .bulkCreate(manualFixtures)

  yield db.models.manual.findAll().then(res => console.log('res is: ', res))
})
