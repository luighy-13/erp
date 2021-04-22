'use strict'

const User = use('App/Models/User')

class UserController {

  async add({request , response}){
    const user_data = request.only(['email','password']);
    const user = await User.create(user_data);
    
    return response.created({
      status: true,
      data: user
    })
  }

}

module.exports = UserController
