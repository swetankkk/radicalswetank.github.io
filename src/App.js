import React from 'react';
import style from './App.style.js';
import Footer from './components/footer';
import SideArea from './components/SideArea';
import MainArea from './components/MainArea';
function App() {
  return (
    <div>
      <div style={style.bars}>
        <SideArea />
      <MainArea/>
      </div>
        <Footer />
    </div>
  );
}

export default App;
