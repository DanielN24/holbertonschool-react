import './App.css'
import holbertonlogo from '../src/holbertonlogo.jpg'
import {getFullYear, getFooterCopy} from './utils'

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <header >
          <img src= { holbertonlogo } alt="HOLBERTON"></img>
          <h1>School dashboard</h1>
        </header>
      </div>
      <div className="App-body">
        <body>
          <p>Login to access the full dashboard</p>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"></input>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password"></input>
          <button>OK</button>
        </body>
      </div>
      <div className="App-footer">
        <footer>
          <p>Copyright { getFullYear() } - { getFooterCopy() }</p>
        </footer>
      </div>
    </div>
  );
}

export default App;