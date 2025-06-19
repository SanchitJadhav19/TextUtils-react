import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextTransform from './components/TextTransform';
import About from './components/About'
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const dismissAlert = () => {
    setAlert(null);
  };

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    document.body.style.backgroundColor = mode === 'light' ? '#000000' : '#ffffff';
    document.body.style.color = mode === 'light' ? '#ffffff' : '#000000';
    showAlert(`${mode === 'light' ? 'Dark' : 'Light'} mode has been enabled`, "success");
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} dismissAlert={dismissAlert}/>
      <TextTransform mode={mode} showAlert={showAlert}/>
      {/* <About mode={mode}/> Uncomment to show About below */}
    </>
  );
}

export default App;
