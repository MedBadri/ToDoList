import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3y5yAw-o0MjlBgQga-0OR60ZeIymazlw",
  authDomain: "enigma-ef664.firebaseapp.com",
  projectId: "enigma-ef664",
  storageBucket: "enigma-ef664.appspot.com",
  messagingSenderId: "1041975377697",
  appId: "1:1041975377697:web:4b65262243f07c5c614860",
  measurementId: "G-169FT8X74S"
};

firebase.initializeApp(firebaseConfig);

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }

  render() {
    const { addItem, inputElement, currentItem, handleInput } = this.props;

    return (
      <div className="todo-list-main">
        <h1>Todo List</h1>
        <form className="todo-form" onSubmit={addItem}>
          <input
            type="text"
            className="todo-input"
            placeholder="Enter task"
            ref={inputElement}
            value={currentItem.text}
            onChange={handleInput}
          />
          <button type="submit" className="todo-button">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default TodoList;