import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string  

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public userId: number
}
