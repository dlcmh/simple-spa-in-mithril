var m = require('mithril')

var UserList = require('./views/UserList')
var UserForm = require('./views/UserForm')

// The m.route call specifies that the application will be rendered into
// document.body. The "/list" argument is the default route. That means the user
// will be redirected to that route if they land in a route that does not exist.
// The {"/list": UserList} object declares a map of existing routes, and what
// components each route resolves to.
m.route(document.body, '/list', {
  '/list': UserList,
  '/edit/:id': UserForm,
})
