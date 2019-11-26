import React from "react";

function TodoItem(props) {
  return (
    <section className="task-list">
      <ul className="task-item-wrap">
        {props.data.map(cur => (
          <li key={cur.id} className="task-item">
            <label>
              <input type="checkbox" />
              {cur.title}
            </label>
            <button className="btn-delete">Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoItem;
