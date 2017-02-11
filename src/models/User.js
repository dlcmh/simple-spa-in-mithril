var m = require('mithril')

var User = {
  list: [],
  loadList: function() {
    // `return` is a general good practice when working with Promises, which
    // allows us to register more callbacks to run after the completion of the
    // XHR request.
    return m.request({
      method: 'GET',
      url: 'http://rem-rest-api.herokuapp.com/api/users',
      withCredentials: true, // indicates use of cookies
                             // (which is a requirement for the REM API)
    })
    .then(function(result) {
      User.list = result.data
    })
  }
}

module.exports = User
