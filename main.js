const { app, BrowserWindow, Menu } = require('electron');
const { autoUpdater } = require('electron-updater');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100, height: 800, backgroundColor: '#000000',
    icon: __dirname + '/icon.png'
  });
  Menu.setApplicationMenu(null);
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify().catch(() => {});
});
app.on('window-all-closed', () => app.quit());
