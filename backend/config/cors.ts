import Env from '@ioc:Adonis/Core/Env'
import { CorsConfig } from '@ioc:Adonis/Core/Cors'

const corsConfig: CorsConfig = {
  enabled: true,

  origin: true,

  methods: [
    'GET',
    'HEAD',
    'POST',
    'PUT',
    'DELETE',
    'PATCH',
  ],

  headers: true,

  exposeHeaders: [],

  credentials: true,

  maxAge: 90,
}

export default corsConfig
