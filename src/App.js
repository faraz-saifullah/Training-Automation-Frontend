import React from 'react';
import LoginForm from './Components/loginForm';
import './App.css';
import NavBar from './Components/navBar';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <LoginForm/>
//     </div>
//   );
// }

export default App;