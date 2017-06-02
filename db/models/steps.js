const Sequelize = require('sequelize')

module.exports = db => {
  db.define('step', {
    manual_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    step_num: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    body: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  }, {
    underscored: true,
    underscoredAll: true,
  })
}