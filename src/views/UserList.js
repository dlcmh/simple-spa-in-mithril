var m = require('mithril')
var User = require('../models/User')

module.exports = {
  // notice we didn't do oninit: User.loadList() (with parentheses at the end).
  // The difference is that oninit: User.loadList() calls the function once and
  // immediately, but oninit: User.loadList only calls that function when the
  // component renders. This is an important difference and a common pitfall for
  // developers new to javascript: calling the function immediately means that
  // the XHR request will fire as soon as the source code is evaluated, even if
  // the component never renders. Also, if the component is ever recreated
  // (through navigating back and forth through the application), the function
  // won't be called again as expected.
  oninit: User.loadList,
  view: function() {
    // The ".user-list" string is a CSS selector, and as you would expect,
    // .user-list represents a class. When a tag is not specified,
    // div is the default. So this view is equivalent to
    // <div class="user-list"></div>
    return m('.user-list', User.list.map(function(user) {
      // oncreate: m.route.link makes the link behave like a routed link
      // as opposed to merely behaving like a regular link). What this means is
      // that clicking the link would change the part of URL that comes after
      // the hashbang #! (thus changing the route without unloading the current
      // HTML page)
      return m('a.user-list-item', {href: '/edit/' + user.id, oncreate: m.route.link}, user.firstName + ' ' + user.lastName)
    }))
  }
}
