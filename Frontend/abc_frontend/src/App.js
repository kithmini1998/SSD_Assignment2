import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Import components
import LogIn from './components/LogIn'
import AddMessageComponent from './components/AddMessageComponent'
import AddFileComponent from './components/AddFileComponent'
import AddUser from './components/AddUser'

function App() {
  return (
    <Router>
      <div>
        <Route path="/login" exact component={LogIn} />
        <Route path="/addMessage" exact component={AddMessageComponent} />
        <Route path="/addFile" exact component={AddFileComponent} />
        <Route path="/addUser" exact component={AddUser} />
      </div>
    </Router>
  )
}

export default App
