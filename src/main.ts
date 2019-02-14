import {app, BrowserWindow} from 'electron';

let mainWindow:BrowserWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 200,
    height: 175,
    minimizable: false,
    maximizable: false,
    //frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  
  mainWindow.setMenuBarVisibility(false);
  mainWindow.setResizable(false);
  mainWindow.loadFile('./src/index.html')
  //mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => { mainWindow = null; });
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

