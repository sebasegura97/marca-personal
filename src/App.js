import React, { Component } from 'react';
import Header from './sections/components/header';
import AppLayout from './app-layout'
import DesktopLayout from './sections/components/desktop-layout'
import Resumen from './sections/components/resumen';
import Estudios from './sections/components/estudios';
import Skills from './sections/components/skills';
import Portfolio from './sections/components/portfolio';
import Redes from './sections/components/redes';
import Mas from './sections/components/mas';



class App extends Component {
  state = { width: 0, height: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    
  }

  render() {
    // let resumen;
    // if (this.state.width > 700) {
    //   resumen = <Resumen><Redes /></Resumen>
    // } else {
    //   resumen = <Resumen />
    // }
    if (this.state.width > 700){
      return (
        <AppLayout>
          <Header></Header>
          <DesktopLayout>
            <Resumen>
              <Redes />
            </Resumen>
            <Skills />

            <Estudios/>
            <Portfolio/>
            <Mas/>
          </DesktopLayout>
        </AppLayout>
      );
    }else{
      return (
        <AppLayout>
          <Header></Header>
          <Resumen />
          <Estudios />
          <Skills />
          <Portfolio />
          <Redes />
          <Mas />
        </AppLayout>
      );
    }
  }
}

export default App;
