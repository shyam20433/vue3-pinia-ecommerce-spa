import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class Admin {
  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const userId = request.header('user-id')

    if (!userId) {
      return response.unauthorized({
        message: 'Login required',
      })
    }
console.log(
    'AUTHORIZATION HEADER:',
    request.header('authorization')
  )
    const user = await User.find(userId)

    if (!user) {
      return response.unauthorized({
        message: 'Invalid user',
      })
    }

    if (user.role !== 'admin') {
      return response.forbidden({
        message: 'Admin access required',
      })
    }

    await next()
  }
}
