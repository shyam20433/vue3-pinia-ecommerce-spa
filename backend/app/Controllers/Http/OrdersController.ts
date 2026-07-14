import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'
import { DateTime } from 'luxon'
import UpdateOrderStatusValidator from 'App/Validators/UpdateOrderStatusValidator'
import StoreOrderValidator from 'App/Validators/StoreOrderValidator'
export default class OrdersController {

  public async index({ response }: HttpContextContract) {
    try {
      const orders = await Order.query().preload('user').orderBy('id', 'desc')
      return response.ok(orders)
    } catch (error) {
      console.error('FETCH ORDERS ERROR:', error)
      return response.internalServerError({
        message: 'Failed to retrieve orders. Please try again later.',
      })
    }
  }

  public async updateStatus({ params, request, response }: HttpContextContract) {
    try {
      const order = await Order.find(params.id)

      if (!order) {
        return response.notFound({
          message: 'Order not found',
        })
      }
      const data=await request.validate(UpdateOrderStatusValidator)
      const status = data.status
      order.status = status
      await order.save()

      return response.ok({
        message: 'Order status updated successfully',
        order,
      })
    } catch (error) {
      console.error('update order error:', error)
      return response.internalServerError({
        message: 'Failed to update order status.',
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreOrderValidator)
    try {
      const order = await Order.create({
        userId: data.userId,
        items:data.items,
        totalItems: data.totalItems,
        totalPrice: data.totalPrice,
        orderDate: DateTime.now(),
      })

      return response.created(order)
    } catch (error) {
      console.error('create order error:', error)
      return response.badRequest({
        message: 'Failed to create order. Please check your data payload.',
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      console.log('DELETE ORDER ID:', params.id)
      const order = await Order.find(params.id)

      if (!order) {
        return response.notFound({
          message: 'Order not found',
        })
      }

      await order.delete()

      return response.ok({
        message: 'Order deleted successfully',
      })
    } catch (error) {
      console.error('delete order error:', error)
      return response.internalServerError({
        message: 'Failed to delete order.',
      })
    }
  }

  public async myOrders({ params, response }: HttpContextContract) {
    try {
      const orders = await Order.query()
        .where('user_id', params.userId)
        .orderBy('id', 'desc')

      return response.ok(orders)
    } catch (error) {
      console.error('fetch order error:', error)
      return response.internalServerError({
        message: 'Failed to fetch your orders.',
      })
    }
  }
}
