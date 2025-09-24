# Electron Messenger Sample

A simple Electron application that launches web-based messenger apps in a single desktop application. This project serves as a sample for loading web versions of messenger applications that may not have native desktop clients or are blocked from installation on a corporate PC.

## Messengers Included

*   Telegram
*   Discord
*   What's App

## How it Works

This application is built with Electron and uses a simple architecture:

1.  **Main Process (`main.js`):**
    *   Creates the main browser window (`index.html`).
    *   Listens for an IPC (Inter-Process Communication) event (`'redirect-new'`) from the renderer process.
    *   When the event is received, it creates a new `BrowserWindow` and loads the specified messenger URL.

2.  **Renderer Process (`index.js` & `index.html`):**
    *   Displays buttons for each messenger service.
    *   When a button is clicked, it sends the corresponding URL to the main process using the `contextBridge` and `ipcRenderer` modules.

3.  **Preload Script (`preload.js`):**
    *   Safely exposes a `myapi` object to the renderer process with a `send` method. This allows the renderer to communicate with the main process without exposing the full `ipcRenderer` API, which is a security best practice.

## How to Use

### Prerequisites

*   Node.js version 16.10.0 or higher.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/youp-han/Electron-Messenger-Sample.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Electron-Messenger-Sample
    ```
3.  Install the necessary packages:
    ```bash
    npm install
    ```

### Running the App

To run the application for testing purposes:

```bash
npm start
```

### Building the App

To build the application into an executable file (`.exe` for Windows, `.dmg` for macOS):

```bash
npm run make
```

The output files will be located in the `out/make` directory.

**Note:** For macOS distribution builds, you will need to set the following environment variables: `CSC_NAME`, `APPLE_ID`, `APPLE_APP_SPECIFIC_PW`, and `APPLE_TEAM_ID`.

## Technologies Used

*   [Electron](https://www.electronjs.org/)
*   [Node.js](https://nodejs.org/)
*   HTML
*   CSS
*   JavaScript

## Screenshots

![image](https://github.com/youp-han/Electron-Messenger-Sample/assets/5876977/0a5fccdd-f0af-400d-9c84-3ecefe9bdbd6)
![image](https://github.com/youp-han/Electron-Messenger-Sample/assets/5876977/3b5adaff-a854-4353-ba3d-ef291af15525)