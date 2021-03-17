'use strict'

import { Schema } from '@m92/mongo-odm'

const taskSchema = new Schema({
  taskId: { type: String, default: '', trim: true },
  mappedUser: { type: String, default: '', trim: true },
  type: { type: String, enum: ['DIRECT', 'INDIRECT', 'CLOSED'] , default: 'CLOSED', trim: true },
  name: { type: String, default: '', trim: true },
  description: { type: String, default: '', trim: true },
  isActive: { type: Boolean, trim: true, default: true }
}, { timestamps: true, _id: false })

export default taskSchema
