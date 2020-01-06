;
(function () {
  'use strict'
  let data = {
    idCounter: 5,
    orders: [

      {
        id: 1,
        date: new Date,
        product: 'Курс по верстке',
        name: 'Юрий',
        email: 'info1@rightblog.ru',
        phone: '+79097755777',
        status: 'new'
      },

      {
        id: 2,
        date: new Date,
        product: 'Курс по JavaScript',
        name: 'Алексей',
        email: 'info12@rightblog.ru',
        phone: '+79025755333',
        status: 'process'
      },

      {
        id: 3,
        date: new Date,
        product: 'Курс по PHP',
        name: 'Дмитрий',
        email: 'info123@rightblog.ru',
        phone: '+78887755111',
        status: 'complete'
      },
      {
        id: 4,
        date: new Date,
        product: 'Курс по PHP',
        name: 'Arozhdan',
        email: 'arozhdan@rightblog.ru',
        phone: '+78824555111',
        status: 'archived'
      }
    ]
  }
  if (!load()) {
    save(data)
  }
  data = load()
  const getCopy = x => JSON.parse(JSON.stringify(x))


  const api = {
    getOrders() {
      return getCopy(data.orders)
    },
    getOrderById(id) {
      for (const order of data.orders) {
        if (order.id === id) {
          return getCopy(order)
        }
      }
    },
    updateOrder(id, orderData) {
      let order = data.orders.find(x => x.id === id)
      order.product = orderData.product
      order.name = orderData.name
      order.email = orderData.email
      order.phone = orderData.phone
      order.status = orderData.status
      save(data)
    },
    createOrder(newOrderData) {

      newOrderData.id = data.idCounter
      data.idCounter++
      data.orders.push(newOrderData)
      save(data)
      load()

    }

  }


  window.Model = api

  function save(data) {
    localStorage.setItem('__data__', JSON.stringify(data))
  }

  function load() {
    const result = localStorage.getItem('__data__')
    if (!result) {
      false
    }
    return JSON.parse(result)
  }

})();