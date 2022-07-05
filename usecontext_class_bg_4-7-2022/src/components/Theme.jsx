import React from "react";
import { ThemeContext } from "./ThemeContext";
class Theme extends React.Component {
    state = { inputColor: 'red' }


    render() {
        return (
            <ThemeContext.Consumer>
                {
                    ({ state, changeColorHandler,x }) => (
                        <div style={{ backgroundColor: state.color }}>
                            <h1 >Hello from the Theme {x}</h1>
                            <input  onChange={(e) => {
                                this.setState({ inputColor: e.target.value })
                            }} />
                            <input type="button" value={'Change'} onClick={() => changeColorHandler(this.state.inputColor)} />
                        </div>
                    )
                }

            </ThemeContext.Consumer>

        );
    }
}
export default Theme