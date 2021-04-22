'use strict'

const Bank = use('App/Models/Bank')

class BankController {

  async add({request , response}){
    console.log("hola")
    const data = request.only(['name']);
    const bank = await Bank.create(data);
    
    return response.created({
      status: true,
      data: bank
    })
  }

}

module.exports = BankController
