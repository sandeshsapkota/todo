import React, { Component } from "react";
// Components
import Header from "./components/Header";
import Search from "./components/Search";
import TodoItem from "./components/TodoItems";
import Todos from "./components/Todos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [...Todos],
      isEmpty: false,
      currentItem: {
        title: undefined,
        id: null
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.setState({isEmpty: true})
  }

  handleChange(e) {
    const task = e.target.value;
    const newId = this.state.data.length + 1;
    const newTask = {
      title: task,
      id: newId
    };
    this.setState({ currentItem: newTask });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.isEmpty) {
      this.onSubmit();
      return;
    }
    console.log("empty xaina");
    this.setState({ data: [...this.state.data, this.state.currentItem] });
  }
  render() {
    return (
      <div>
        <Header />
        <Search
          hasSubmited={this.state.isEmpty}
          change={this.handleChange}
          submit={this.handleSubmit}
          item={this.state.currentItem}
        />
        <TodoItem data={this.state.data} />
      </div>
    );
  }
}

export default App;
