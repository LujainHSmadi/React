import React from 'react';


class NameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    number:''};

  }

  handleChangeName=(event)=> {
    this.setState({
      name: event.target.value});
  }
  handleChangeNum=(event)=> {
    this.setState({
      number: event.target.value});
  }

  handleSubmit = (event) => {
    
    alert('A name was submitted: ' + this.state.name + 'A number was submitted: ' + this.state.number);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <select value={this.state.number} onChange={this.handleChangeNum}>
          <option>select</option> 
          <option>one</option> 
          <option>two</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm
