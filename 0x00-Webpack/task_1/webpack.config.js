const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'puclic'),
    filename: 'bundle.js'
  },
  entry: {
    main: './js/dashboard_main.js'
  },
  mode: 'production',
}