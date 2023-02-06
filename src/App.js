import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter >
    <Nav />
      <h1>ARGENT BANK</h1>
    </BrowserRouter>
  );
}

export default App;
