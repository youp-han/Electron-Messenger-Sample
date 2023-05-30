// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
let mainWindow;
const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36';

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 280,
    height: 250,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, './index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


ipcMain.on('redirect', (event, clickedURL) => {

  win = new BrowserWindow(
    {
      width: 900,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      }
    }
  );
  

  // Perform your login validation here
  const appURL = clickedURL;
  console.log("ipcMain = " + appURL);
  win.loadURL(appURL, { userAgent });
  
  win.webContents.reloadIgnoringCache();


});