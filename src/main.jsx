import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContext, themes } from './themeContext';

function Main() {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <div className="main h-100">
      <ThemeContext.Provider value={theme}>
        <div className="wrapper h-100" style={{background: theme.background}}>
          <span className="form-check form-switch d-flex justify-content-center py-5">
            <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value={theme} onChange={() => setTheme(theme.theme === 'dark' ? themes.light : themes.dark)} checked={theme.theme === 'dark' ? true : false}/>
            <label className="form-check-label" htmlFor="mySwitch" style={{color: theme.text}}>&nbsp;&nbsp;Dark Mode</label>
          </span>
          <App />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
