import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Product from 'App/Models/Product'
import Order from 'App/Models/Order'
import { DateTime } from 'luxon'

export default class EcommerceDataSeeder extends BaseSeeder {
  public async run() {

    await User.createMany([
  {
    id: 1,
    username: 'shyamsundar',
    role: 'admin',
  },
  {
    id: 2,
    username: 'shyam',
    role: 'user',
  },
  {
    id: 3,
    username: 'sundar',
    role: 'user',
  },
  {
    id: 4,
    username: 'wertyui',
    role: 'user',
  },
  {
    id: 5,
    username: 'kishore',
    role: 'user',
  },
])
await Product.createMany([
  {
    id: 1,
    name: 'phone',
    price: 15000,
    image:
      'https://i.pinimg.com/1200x/c7/2a/eb/c72aeb2719effad574365505f2f16e26.jpg',
  },
  {
    id: 2,
    name: 'laptop',
    price: 150000,
    image:
      'https://i.pinimg.com/1200x/de/ad/e6/deade6c3f65c0c5d48914fab1e5a8ab4.jpg',
  },
  {
    id: 3,
    name: 'powerbank',
    price: 999,
    image:
      'https://i.pinimg.com/736x/20/69/0d/20690dd093157ed7a3786add6903ade5.jpg',
  },
  {
    id: 4,
    name: 'headphone',
    price: 500,
    image:
      'https://i.pinimg.com/736x/ae/79/08/ae79083e5ae4dacaedfbc804fadd75c4.jpg',
  },
  {
    id: 5,
    name: 'charger',
    price: 300,
    image:
      'https://i.pinimg.com/736x/0c/19/cc/0c19cc08514a0de5a5028b68bccb9003.jpg',
  },
  {
    id: 6,
    name: 'laptop bag',
    price: 600,
    image:
      'https://i.pinimg.com/736x/a2/1d/84/a21d84942ac25117d51bf312bdb7f9a3.jpg',
  },
])
await Order.createMany([
  {
    id: 1,
    userId: 2,
    items: [
      {
        id: 2,
        image:
          'https://i.pinimg.com/1200x/de/ad/e6/deade6c3f65c0c5d48914fab1e5a8ab4.jpg',
        name: 'laptop',
        price: 150000,
        quantity: 2,
      },
    ],
    totalItems: 2,
    totalPrice: 300000,
    orderDate: DateTime.fromISO('2026-07-03T17:02:19'),
  },

  {
    id: 3,
    userId: 3,
    items: [
      {
        id: 2,
        image:
          'https://i.pinimg.com/1200x/de/ad/e6/deade6c3f65c0c5d48914fab1e5a8ab4.jpg',
        name: 'laptop',
        price: 150000,
        quantity: 1,
      },
      {
        id: 4,
        image:
          'https://i.pinimg.com/736x/ae/79/08/ae79083e5ae4dacaedfbc804fadd75c4.jpg',
        name: 'headphone',
        price: 500,
        quantity: 1,
      },
    ],
    totalItems: 2,
    totalPrice: 150500,
    orderDate: DateTime.fromISO('2026-07-06T09:27:52'),
  },

  {
    id: 4,
    userId: 2,
    items: [
      {
        id: 1,
        name: 'phone',
        price: 15000,
        image:
          'https://i.pinimg.com/1200x/c7/2a/eb/c72aeb2719effad574365505f2f16e26.jpg',
        quantity: 2,
      },
    ],
    totalItems: 2,
    totalPrice: 30000,
    orderDate: DateTime.fromISO('2026-07-06T09:28:07'),
  },

  {
    id: 5,
    userId: 2,
    items: [
      {
        id: 1,
        name: 'phone',
        price: 15000,
        image:
          'https://i.pinimg.com/1200x/c7/2a/eb/c72aeb2719effad574365505f2f16e26.jpg',
        quantity: 1,
      },
    ],
    totalItems: 1,
    totalPrice: 15000,
    orderDate: DateTime.fromISO('2026-07-06T13:07:40'),
  },

  {
    id: 6,
    userId: 2,
    items: [
      {
        id: 1,
        name: 'phone',
        price: 15000,
        image:
          'https://i.pinimg.com/1200x/c7/2a/eb/c72aeb2719effad574365505f2f16e26.jpg',
        quantity: 1,
      },
      {
        id: 3,
        image:
          'https://i.pinimg.com/736x/20/69/0d/20690dd093157ed7a3786add6903ade5.jpg',
        name: 'powerbank',
        price: 999,
        quantity: 1,
      },
      {
        id: 4,
        image:
          'https://i.pinimg.com/736x/ae/79/08/ae79083e5ae4dacaedfbc804fadd75c4.jpg',
        name: 'headphone',
        price: 500,
        quantity: 1,
      },
      {
        id: 6,
        image:
          'https://i.pinimg.com/736x/a2/1d/84/a21d84942ac25117d51bf312bdb7f9a3.jpg',
        name: 'laptop bag',
        price: 600,
        quantity: 1,
      },
    ],
    totalItems: 4,
    totalPrice: 17099,
    orderDate: DateTime.fromISO('2026-07-06T13:12:32'),
  },

  {
    id: 7,
    userId: 2,
    items: [
      {
        id: 1,
        name: 'phone',
        price: 15000,
        image:
          'https://i.pinimg.com/1200x/c7/2a/eb/c72aeb2719effad574365505f2f16e26.jpg',
        quantity: 2,
      },
    ],
    totalItems: 2,
    totalPrice: 30000,
    orderDate: DateTime.fromISO('2026-07-06T15:18:15'),
  },

  {
    id: 8,
    userId: 2,
    items: [
      {
        id: 1,
        name: 'phone',
        price: 15000,
        image:
          'https://i.pinimg.com/1200x/c7/2a/eb/c72aeb2719effad574365505f2f16e26.jpg',
        quantity: 3,
      },
      {
        id: 2,
        image:
          'https://i.pinimg.com/1200x/de/ad/e6/deade6c3f65c0c5d48914fab1e5a8ab4.jpg',
        name: 'laptop',
        price: 150000,
        quantity: 1,
      },
      {
        id: 3,
        image:
          'https://i.pinimg.com/736x/20/69/0d/20690dd093157ed7a3786add6903ade5.jpg',
        name: 'powerbank',
        price: 999,
        quantity: 1,
      },
    ],
    totalItems: 5,
    totalPrice: 195999,
    orderDate: DateTime.fromISO('2026-07-07T13:14:31'),
  },
])
  }
}
