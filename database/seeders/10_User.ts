import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        id: 1,
        name: 'Bob'
      },
      {
        id: 2,
        name: 'Jane'
      }
    ])
  }
}
