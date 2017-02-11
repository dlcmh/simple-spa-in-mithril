Based on [Simple application - Mithril.js](http://mithril.js.org/simple-application.html).

Create entry point for the application, 'index.html'.

Initialize 'package.json' with `npm init -y`.

Install Mithril (full instructions in [Installation - Mithril.js](http://mithril.js.org/installation.html)):

    npm install mithril --save
    npm install webpack --save-dev


Create 'User.js' module to store state.

Add code to 'User.js' to load data from a server using Mithril's XHR utility, `m.request`:

- include Mithril in the module
- create function `loadList` to trigger XHR call
- implement `m.request` -> returns a Promise that resolves to the data from the endpoint - Mithril assumes that the response is in JSON format.

This simple 'User.js' model exposes two members:

- User.list (an array of user objects),
- and User.loadList (a method that populates User.list with server data).

Create view model 'src/views/UserList.js' to display data from User model:

- include Mithril and 'User.js' model
- use Mithril hyperscript to create a list of items
- reference the list of users to dynamically loop though the data
- use `oninit` component lifecycle method to trigger call to User.loadList when rendering this view

Render 'UserList.js' view in 'src/index.js'.

Add routing by changing `m.mount` to `m.route`.

Editing users:

- create module 'views/UserForm.js'
- require 'UserForm.js' in 'index.js'
- create route (that accepts `id` parameter) to reference 'UserForm.js'
