import express from 'express'
import helloRouter from './router/hello.router.ts'
import gitHubRouter from './router/gitHub.router.ts'

const app = express()
const port = 3000

app.use('/hello', helloRouter)

app.use('/github', gitHubRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
