import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.integer('user_id').references('users.id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
