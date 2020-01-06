;
(function () {
  'use strict'
  const api = {}
  api.start = function () {
    document.querySelector('#createOrder')
      .addEventListener('click', function () {
        let newOrderData= collectData()
        if(newOrderData.name,newOrderData.email,newOrderData.phone)    Model.createOrder(newOrderData)
        alert(newOrderData.name)
      })
  }
  window.Controller = api

  function collectData() {
    const newOrder = {
      status: 'new'
    }
    newOrder.date=new Date
    
    newOrder.name=document.querySelector('.input-name').value
    newOrder.email=document.querySelector('.input-email').value
    newOrder.phone=document.querySelector('.input-phone').value
    newOrder.product=document.querySelector('.input-product').value
    
    
    return newOrder
  }
})();