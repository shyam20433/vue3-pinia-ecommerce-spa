import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
export default class Auth {
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
    const user = await User.find(userId)


    if (user?.role !== "admin") {
      return response.forbidden({
        message: 'Admin access required',
      })
    }

    await next()
  }
}
