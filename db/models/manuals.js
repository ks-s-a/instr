const Sequelize = require('sequelize')

module.exports = db => {
  db.define('manual', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    url: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
    underscoredAll: true,
  })
}