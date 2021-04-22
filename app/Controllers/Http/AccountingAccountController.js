'use strict'

const AccountingAccount = use('App/Models/AccountingAccount')

class AccountingAccountController {
  async add({request , response}){
    
    const data = request.only(['cuenta', 'description','mount']);
    const account = await AccountingAccount.create(data);
    
    return response.created({
      status: true,
      data: account
    })
  }
  async addChildren({request , response}){
    
    const data = request.only(['title', 'description', 'mount', 'father_id']);
    const account = await AccountingAccount.create(data);
    
    return response.created({
      status: true,
      data: account
    })
  }
}

module.exports = AccountingAccountController
