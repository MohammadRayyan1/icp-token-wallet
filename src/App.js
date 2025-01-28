import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TransferForm from './components/TransferForm';
import "./App.css";


const App = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <TransferForm />
    </div>
  );
};

export default App;
