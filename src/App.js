import logo from './logo.svg';
import './App.css';
import Child from "./ChildComponent";
import {createElement, memo, useCallback, useEffect, useState} from "react";

const App = memo (() => {
  //State
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: 'Alex'
  })

  useEffect(() => {
    console.log(data)
  }, [data.name]);

  const handler = useCallback( () => {
    setData((prevState) => ({
      ...prevState, name: 'Lora'
    }))

    console.log(data)
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Child name = 'User'></Child>
      </header>

      <button onClick={() => setLoading(!loading)}>Change</button>
      {loading ? <Child name='hello'/> : null}

      <button onClick={handler}>handler</button>
      <Child name='hello' handler={handler}/>
    </div>
  );
})

// class App extends React.Component {
//
//   render() {
//     return (
//         <div className="App">
//           <header className="App-header">
//             {/*<img src={logo} className="App-logo" alt="logo" />*/}
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//           </header>
//         </div>
//     );
//   }
// }

export default App;
