import './App.css'
import holbertonlogo from '../src/holbertonlogo.jpg'
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header >
          <img src= { holbertonlogo }></img>
          <h1>School dashboard</h1>
        </header>
      </div>
      <div className="App-body">
        <body>
          <p>Login to access the full dashboard</p>
        </body>
      </div>
      <div className="App-footer">
        <footer>
          <p>Copyright 2020 - holberton School</p>
        </footer>
      </div>
    </div>
  );
}

export default App;