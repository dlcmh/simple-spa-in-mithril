var m = require('mithril')

module.exports = {
  view: function() {
    return m('form', [
      m('label.label', 'First name'),
      m('input.input[type=text][placeholder=First name]'),
      m('label.label', 'Last name'),
      m('input.input[type=text][placeholder=Last name]'),
      m('button.button[type=submit]', 'Save'),
    ])
  }
}
