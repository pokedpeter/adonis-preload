/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'
import Post from 'App/Models/Post'

Route.get('/', async () => {
  const post = await Database.transaction(async (trx) => {
    const post = await Post.query()
      .preload('user')
      .useTransaction(trx)
      .forUpdate()
      .first()

    return post
  })

  return post
})
