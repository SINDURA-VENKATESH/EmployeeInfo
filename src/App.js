import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import EmployeeList from './components/EmployeeList/EmployeeList';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
              <Route exact path='/' component={Login} />
              <ProtectedRoute path='/dashboard' component={EmployeeList} />
      </Switch>
    </Router>
  );
}

export default App;
