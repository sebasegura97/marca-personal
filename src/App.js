import React, { Component } from 'react';
import Header from './sections/components/header';
import AppLayout from './app-layout'
import Resumen from './sections/components/resumen';
import Estudios from './sections/components/estudios';
import Skills from './sections/components/skills';
import Portfolio from './sections/components/portfolio';
import Redes from './sections/components/redes';
import Mas from './sections/components/mas';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Header></Header>
        <Resumen></Resumen>
        <Estudios/>
        <Skills/>
        <Portfolio/>
        <Redes/>
        <Mas/>
      </AppLayout>
    );
  }
}

export default App;
