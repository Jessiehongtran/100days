import './App.css';
import Nav from './components/nav';
import Drawing from './components/drawing';
import Building from './components/building';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route
        exact path="/"
        render = {
          props => {
            return (
              <>
                <Nav />
                <Drawing />
              </>
            )
          }
        }
      />
      <Route
        exact path="/building"
        render = {
          props => {
            return (
              <>
                <Nav />
                <Building />
              </>
            )
          }
        }
      />
    </div>
  );
}

export default App;
