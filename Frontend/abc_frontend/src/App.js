import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Import components
import AddMessageComponent from './components/AddMessageComponent'
import LogIn from './components/LogIn'

function App() {
  return (
    <Router>
      <div>
        <Route path="/login" exact component={LogIn} />
        <Route path="/addMessage" exact component={AddMessageComponent} />
      </div>
    </Router>
  )
}

export default App
