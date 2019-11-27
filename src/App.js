import React, {Component} from "react";
// Components
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItems";
import Todos from "./components/Todos";

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [...Todos],
            isTaskEmpty: false,
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

        if (!task) {
            this.setState({isTaskEmpty: true})
        } else {
            this.setState({
                isTaskEmpty: false,
            })
        }

        this.setState({currentItem: newTask});
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = this.state.currentItem.title

        if (!title) {
            this.setState({isTaskEmpty: true})
        } else {
            this.setState({
                isTaskEmpty: false,
                data: [...this.state.data, this.state.currentItem]
            })
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <TodoForm
                    isInputEmpty={this.state.isTaskEmpty}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                <TodoItem data={this.state.data}/>
            </div>
        );
    }
}

export default App;
