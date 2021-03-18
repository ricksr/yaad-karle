'use strict'

import { mongoose } from '@m92/mongo-odm'

const {
  MONGO_DBNAME = '',
  MONGO_HOSTS = 'localhost:27017',
} = process.env

const REQUIRED_CONFIG = [
  // 'MONGO_DBNAME',
  // 'MONGO_HOSTS',
]

REQUIRED_CONFIG.forEach(key => {
  if (!process.env[key]) {
    console.error('[Error] Missing MongoDB Config:', key)
    return process.exit(1)
  }
})

const CONNECTION_URI = `mongodb://${MONGO_HOSTS}/${MONGO_DBNAME}`

const CONFIG = {
  DBNAME: MONGO_DBNAME,
  CONNECTION_URI,
  OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    promiseLibrary: Promise,
    poolSize: 10,

    // replicaSet: MONGO_REPLICASET,
    // readPreference: MONGO_READ_PREFERENCE,
    
  }
}

mongoose.connection.on('connected', () => {
  console.log('[Info] DB Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('[Info] DB Connection Re-established')
})

mongoose.connection.on('disconnected', () => {
  console.log('[Error] DB Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('[Info] DB Connection Closed')
})

mongoose.connection.on('error', (error) => {
  throw error
})

if (process.env.APP_ENVIROMENT === 'dev') { mongoose.set('debug', true) }

const mongoConnect = async () => {
  console.log('[Connection] Connecting to DB...')
  await mongoose.connect(CONNECTION_URI, CONFIG.OPTIONS)
}

const MONGO_CONFIG = { CONFIG, mongoConnect }

export default MONGO_CONFIG
