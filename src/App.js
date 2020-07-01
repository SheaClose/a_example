import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: 'New value',
      todos: ['Make Eggs', 'Squeeze OJ', 'Brew Coffee'],
    };
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleButtonClick(/** event */) {
    var { todos, input } = this.state;
    // this.state.todos.push(this.state.input); //?
    // var newArr = this.state.todos.slice();
    // newArr.push(this.state.input);
    var newState = {
      input: '',
      todos: [...todos, input],
    };
    this.setState(newState);
  }

  handleDelete(index) {
    // var newArr = this.state.todos.slice();
    // newArr.splice(index, 1);
    // this.setState({
    //   todos: newArr,
    // });
    this.setState({
      todos: this.state.todos.filter((c, i) => i !== index),
    });
  }

  render() {
    return (
      <>
        <div>
          <input
            value={this.state.input}
            onChange={(e) => this.handleInputChange(e)}
            placeholder="New Todo"
          />
          <button onClick={() => this.handleButtonClick()}>Submit</button>
          <ul>
            {this.state.todos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo}
                  <span
                    onClick={() => {
                      this.handleDelete(index);
                    }}
                  >
                    x
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
