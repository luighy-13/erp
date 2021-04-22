'use strict'

const Icome = use('App/Models/Income')

class IncomeController {
  async add({request , response}){
    console.log("hola")
    const data = request.only(['title', 'description', 'mount']);
    const icome = await Icome.create(data);
    
    return response.created({
      status: true,
      data: icome
    })
  }
}

module.exports = IncomeController
