;
(function () {
  'use strict'
  const api = {}
  let filter = location.search.slice(1).split('=')[1]
  console.log(filter)
  api.start = function start() {
    update()
  }
  document.querySelectorAll('data-btn-filter')
    .forEach(element => {
      element.addEventListener('click', function () {

        update()
      })
    })

  function update() {
    const originalOrders = Model.getOrders()
    const orders = originalOrders.filter(order => {
      if (filter === 'all') {
        document.querySelector('#filter5').classList.add('active')
        return order.status !== 'archived'
      }
      filter === 'new'?document.querySelector('#filter1').classList.add('active'):document.querySelector('#filter1').classList.remove('active')
      filter === 'complete'?document.querySelector('#filter4').classList.add('active'):document.querySelector('#filter4').classList.remove('active')
      filter === 'archived'?document.querySelector('#filter3').classList.add('active'):document.querySelector('#filter3').classList.remove('active')   
      filter === 'process'?document.querySelector('#filter2').classList.add('active'):document.querySelector('#filter2').classList.remove('active')

      return order.status === filter
    })
    const ordersTable = View.getOrdersTable(orders)
    document.querySelector('table').append(ordersTable)
  }
  window.Controller = api

})();