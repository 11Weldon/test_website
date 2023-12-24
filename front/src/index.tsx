import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./stores/UserStore";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Context = createContext<{ user: UserStore } | null>(null);


root.render(
  <React.StrictMode>
      <Context.Provider value={{
          user: new UserStore()
      }}>
          <App/>
      </Context.Provider>

  </React.StrictMode>
);

reportWebVitals();
