import React from 'react';
import Footer from './components/footer';
import SideArea from './components/SideArea';
import MainArea from './components/MainArea';
import './App.css';

function App() {
  return (
    <div>
      <div className="Bars">
        <SideArea />
        <MainArea />
      </div>
      <Footer />
    </div>
  );
}

export default App;
