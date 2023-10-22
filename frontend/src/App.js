import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from "react";



class App extends React.Component{
  state = { details: [], }

  componentDidMount() {
    let data;
    axios.get('http://127.0.0.1:8000/api/catalog/')
        .then(res => {
          data = res.data;
          this.setState({
            details: data
          });
        })
        .catch(err => {
          console.log(err);
        })
  }
  render() {
      return(
          <div>
              <header>Данные из Django</header>
              <hr></hr>
              <hr></hr>
              {this.state.details.map((output, id) => (
                  <div key={id}>
                      <div>
                          <h2>{output.title}</h2>
                          <p>{output.price}</p>
                          <p>{output.image}</p>
                      </div>
                  </div>
                  ))}
          </div>
      )
  }
}

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

export default App;
