'use strict'

import { Schema, mongoSchemaWrapper } from '@m92/mongo-odm'

import infoSchema from './_info'
import taskSchema from './_task'

const UserTasksSchema = new Schema({
  userId: { type: String, unique: true, default: '' },
  info: { type: infoSchema, default: {} },
  isActive: { type: Boolean, trim: true, default: true },
  tasks: { type: [taskSchema], default: [] }
}, { timestamps: true, _id: true })

mongoSchemaWrapper(UserTasksSchema)

export default UserTasksSchema
