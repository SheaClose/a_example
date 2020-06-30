import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'loading...',
    };
    setTimeout(() => {
      this.setState({ name: 'Shea' });
    }, 2000);
  }

  render() {
    // return <div>My Name is {this.state.name}</div>;
    return (
      <>
        <div></div>
        <div>My Name is {this.state.name}</div>
      </>
    );
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
