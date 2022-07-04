import Home from './components/Home';
import { ThemeContext } from './components/ThemeContext';
import React from 'react';

class App extends React.Component {
  state = {
    color: 'blue',
    size: '20'

  }

  changeColorHandler = (changeColor) => {
    this.setState({ color: changeColor })
  }

  render() {


    return (
      <ThemeContext.Provider value={{ state: this.state, changeColorHandler: this.changeColorHandler }}>

        <Home />
      </ThemeContext.Provider>
    );
  }
}

export default App;
