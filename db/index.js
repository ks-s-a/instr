const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const applyAssociations = require('./associations')

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  dialect: 'postgres'
})

const modelsPath = path.join(__dirname, 'models')
fs.readdirSync(modelsPath).forEach(file => {
  require(`${modelsPath}/${file}`)(sequelize)
})

applyAssociations(sequelize)

sequelize.sync()

console.log(sequelize.models)

module.exports = Object.assign(sequelize, sequelize.models)
