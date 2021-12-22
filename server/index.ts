import next from 'next'
import express from 'express'
import path from 'path'

// const { nextI18NextMiddleware } = require("next-i18next/middlewares")

// # Local Imports
// import nextI18next from "./i18n"
const routes = require('./routes')

const port = parseInt(process.env.NODE_BIND_PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  app.setAssetPrefix(process.env.STATIC_PATH || '')
  server.use(express.static(path.join(__dirname, '../public/static')))
  // server.use(nextI18NextMiddleware(nextI18next))

  server.all('*', (req: any, res: any) => handler(req, res))

  server.listen(port)

  // eslint-disable-next-line no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV_SERVICE
    }`
  )
})
