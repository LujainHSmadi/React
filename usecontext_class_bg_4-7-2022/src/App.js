import Home from './components/Home';
import { ThemeContext } from './components/ThemeContext';
import React from 'react';
import Theme from './components/Theme';

class App extends React.Component {
  state = {
    color: 'blue',

  }

  changeColorHandler = (changeColor) => {
    this.setState({ color: changeColor })
  }

  render() {
let x ='lujain'

    return (
      <ThemeContext.Provider value={{ state: this.state, changeColorHandler: this.changeColorHandler,x }}>

        <Theme />
      </ThemeContext.Provider>
    );
  }
}

export default App;
