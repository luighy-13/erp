'use strict'

const Route = use('Route')


Route.post('/login', 'AuthController.login')
Route.post('/users', 'UserController.add')


Route.post('/addBank', 'BankController.add')

Route.post('/addIncome', 'IncomeController.add')
Route.post('/addEgress', 'EgressController.add')

Route.post('/addAccount', 'AccountingAccountController.add')
Route.post('/addChildrenAccount', 'AccountingAccountController.addChildren')



// Route.on('/').render('welcome')
