import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Import components
import LogIn from './components/LogIn'
import AddMessageComponent from './components/AddMessageComponent'
import AddFileComponent from './components/AddFileComponent'
import AddUser from './components/AddUser'
import UserList from './components/UserList'
import MessageList from './components/MessageList'
<<<<<<< HEAD
import LoginWithHooks from './components/LoginWithHooks'

=======
import FileList from './components/FileList'
>>>>>>> origin/main

function App() {
  return (
    <Router>
      <div>
         <Route path="/" exact component={LogIn} /> 
        {/*<Route path="/" exact component={LoginWithHooks} />*/}
        <Route path="/add-message" exact component={AddMessageComponent} />
        <Route path="/add-file" exact component={AddFileComponent} />
        <Route path="/add-user" exact component={AddUser} />
        <Route path="/user-list" exact component={UserList} />
        <Route path="/message-list" exact component={MessageList} />
        <Route path="/file-list" exact component={FileList} />
      </div>
    </Router>
  )
}

export default App
