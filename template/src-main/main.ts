import { app, BrowserWindow } from 'electron';
import path from 'path';

const isDev = process.env.NODE_ENV === 'development';

const createWindow = (): void => {
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
          nodeIntegration: true,
          nodeIntegrationInWorker: true,
          nodeIntegrationInSubFrames: true,
          enableRemoteModule: true,
          contextIsolation: false,
          // When contextIsolation is enabled, preload.js will encounter "require is not defined" error.
          // But when contextIsolation is disabled, preload.js will not be loaded.
          // preload: path.join(__dirname, 'preload.js')
        }
    });

    if (isDev) {
      mainWindow.loadURL('http://localhost:3000');
      mainWindow.webContents.openDevTools();
    } else {
      mainWindow.loadFile(path.join('build', 'index.html'));
    }
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});