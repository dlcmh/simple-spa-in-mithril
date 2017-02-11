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
