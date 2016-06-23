process.chdir(__dirname)

const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.dock.setIcon('./logo.png')

app.on('ready', function () {
	let loading = new BrowserWindow({
		center: true,
		frame: false,
		transparent: true,
		show: false,
		height: 290,
		width: 210
	})

	let filePath = path.join(__dirname, 'loading.html')
	loading.loadURL('file://' + filePath)

	loading.once('ready-to-show', function () {
		loading.show()

		let { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
		let main = new BrowserWindow({
			height: height,
			width: width,
			show: false
		})

		main.loadURL('https://twitter.com/tokyo_js')

		main.once('ready-to-show', function() {
			main.show()
			loading.close()
		})
	})
})
