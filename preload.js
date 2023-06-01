const {ipcRenderer, contextBridge  } = require('electron');


////////////////////////////////////////////////////////////////
// a new Style of ipcrender handling using contextBridge
////////////////////////////////////////////////////////////////

contextBridge.exposeInMainWorld('myapi', {
  send: (channel, data) => ipcRenderer.invoke( channel, data),
  handle: ( channel, callable, event, data ) => ipcRenderer.on( channel, callable( event, data ) )

})

