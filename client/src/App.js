import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/Customers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
          Learn React
      </header>
      <Customers />
     
    </div>
  );
}

export default App;
