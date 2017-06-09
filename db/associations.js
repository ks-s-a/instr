module.exports = db => {
  db.models.step.belongsTo(db.models.manual)
  db.models.manual.hasMany(db.models.step)
}