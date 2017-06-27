import React from 'react';
import { connect } from 'react-redux';

const TodoForm = ({ dispatch, nextId }) => {
    let input;

    return (
        <div>
        <h3>Add a Todo</h3>
        <form 
        onSubmit={ e => {
            e.preventDefault();
            dispatch({ 
            type: 'ADD_TODO', 
            todo: { name: input.value, id: nextId, complete: false }
          })
          dispatch({ type: 'INC_ID' })
          input.value = null;
        }}
    >
    <input ref={ n => input = n } />
    </form>
    </div>
    )
}

const mapStateToProps = (state) => {
    return { nextId: state.nextId }
}

export default connect(mapStateToProps)(TodoForm);