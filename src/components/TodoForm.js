import React, {Component} from "react";
import Emptybox from "./Emptybox";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <form className="search__form" onSubmit={this.props.onSubmit}>
                <div>
                    <input
                        type="search"
                        placeholder="Add your item here ..."
                        onChange={this.props.onChange}
                    />
                    <input type="submit" value="Add"/>
                </div>
                {this.props.isInputEmpty
                //    <-- isInputEmpty must be true to render EmptyBox
                && <Emptybox/>}
            </form>
        );
    }
}

export default TodoForm;
