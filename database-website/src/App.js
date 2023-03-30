import './App.css';
import Signup from './SignUp';
import Login from './Login';

function App() {
  const title = 'Project database'
  return (
    <div className="App">
          <div className="content">
          <h1>{title}</h1>
          <p>Sign into Project database</p>
          
          <Login></Login>
          <Signup></Signup>
          </div>
    </div>
  );
}

export default App;
