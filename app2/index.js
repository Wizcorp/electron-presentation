const electron = require('electron')
document.body.innerHTML = `<h1>Hello ${electron.remote.process.argv[2]}`
