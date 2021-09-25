import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Upload from './pages/Upload.js';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route component={Upload} path="/upload" />
          <Route component={Home} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
