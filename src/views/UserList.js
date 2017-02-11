var m = require('mithril')
var User = require('../models/User')

module.exports = {
  view: function() {
    // The ".user-list" string is a CSS selector, and as you would expect,
    // .user-list represents a class. When a tag is not specified,
    // div is the default. So this view is equivalent to
    // <div class="user-list"></div>
    return m('.user-list', User.list.map(function(user) {
      return m('.user-list-item', user.firstName + ' ' + user.lastName)
    }))
  }
}
