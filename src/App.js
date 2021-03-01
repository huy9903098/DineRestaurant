import './App.scss';
import Homepage from './Components/Homepage/index';
import Booking from './Components/Booking/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/booking" component={Booking} />
      </div>
    </Router>
  );
}

export default App;
