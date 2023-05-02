import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A new login page template is coming soon
          </p>
        </header>
      </div>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
