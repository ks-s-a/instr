const fs = require('fs')
const pathLib = require("path")

const Koa = require('koa')
const Router = require('koa-router')

const db = require('../db')

const app = new Koa()
const router = new Router()

app.context.db = db

const normalizedPath = pathLib.join(__dirname);
fs.readdirSync(normalizedPath)
  .filter(path => {
    const normalizedPath = pathLib.join(__dirname, path);
    const stats = fs.statSync(normalizedPath)
    return stats.isDirectory()
  })
  .map(directoryPath => {
    const normalizedPath = pathLib.join(__dirname, directoryPath);
    fs.readdirSync(normalizedPath).forEach(modulePath => {
      const normalizedPath = pathLib.join(__dirname, directoryPath, modulePath);
      require(normalizedPath)(router)
    })
  })

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(8888)

module.exports = app
  