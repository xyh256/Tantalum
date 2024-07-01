import {useCallback} from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import ButtonGrid from './ButtonGrid';

function App() {
  const clickTestButton = useCallback(() => {
      window.Telegram.WebApp.openTelegramLink("https://t.me/mmss_bot/test2?hello=nihao");
      // window.Telegram.WebApp.openLink("https://www.baidu.com");
      // window.Telegram.WebApp.openTelegramLink(" https://t.me/AkuTest_bot/MMSDK");
      // window.Telegram.WebApp.openLink(" https://t.me/mmss_bot/test2?startapp=niahao&hashcode=0xdddd");
  });
  return (
      <>
          <div>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Hello world</h1>
          <ButtonGrid />
          <div className="card">
              <button  onClick={clickTestButton}>
                 跳转mini-app
              </button>
              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>
      </>
  )
}

export default App
