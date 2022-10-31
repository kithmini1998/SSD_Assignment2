import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import components
import AddMessageComponent from "./components/AddMessageComponent";

function App() {
  return (
      <Router>
          <div>
              <Route path="/addMessage" exact component={AddMessageComponent} />
          </div>
      </Router>
  );
}

export default App;
