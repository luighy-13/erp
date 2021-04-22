'use strict'

const Egress = use('App/Models/Egress')

class EgressController {
  async add({request , response}){
    
    const data = request.only(['title', 'description', 'mount']);
    const egress = await Egress.create(data);
    
    return response.created({
      status: true,
      data: egress
    })
  }
}

module.exports = EgressController
