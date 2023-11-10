import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    const bob = await User.findBy('name', 'Bob')

    const post1 = new Post()
    post1.id = 1
    post1.title = "Bob's post"
    await post1.related('user').associate(bob!)
    await post1.save()

    const jane = await User.findBy('name', 'Jane')

    const post2 = new Post()
    post2.id = 2
    post2.title = "Jane's post"
    await post2.related('user').associate(jane!)
    await post2.save()
  }
}
