import './App.css';
import AppDetail from './components/AppDetail'
import MainView from './components/MainView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" children={<AppDetail />} />
          <Route path="/">
            <MainView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
