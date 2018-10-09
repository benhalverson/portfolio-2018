import React, { Component } from 'react';
import './styles/css/App.css';
import Footer from './components/Footer';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppRouter />
        <Footer />
      </div>
    );
  }
}

export default App;
