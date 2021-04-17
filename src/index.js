import React, { createContext } from 'react';
import colors from "./color-data.json"
import ReactDOM from 'react-dom';
import App from './App';

export const ColorContext = createContext()

ReactDOM.render(
  <ColorContext.Provider value={{colors}} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ColorContext.Provider>,
  document.getElementById('root')
);
