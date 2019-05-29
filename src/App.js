import React from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Subscribe from './components/subscribe'



function App() {
  return (
    <div>
        <Header />
        <MainContent name="Sunanda" Designation="UI Developer" />
        <MainContent name="Poonam" Designation="QA"/>
        <MainContent name="Tejal" Designation="UI Developer"/>
        <MainContent name="Jagdish" Designation="UI Developer"/>
        <Subscribe />
        <Footer />
    </div>
  );
}

export default App;
