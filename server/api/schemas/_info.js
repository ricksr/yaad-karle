'use strict'

import { Schema } from '@m92/mongo-odm'

const infoSchema = new Schema({
  userName: { type: String, default: '', trim: true },
  password: { type: String, default: '', trim: true },
  email: { type: String, default: '', trim: true }
}, { timestamps: true, _id: false })

export default infoSchema
