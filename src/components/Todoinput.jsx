import React, { Component } from 'react';

class TodoInput extends Component {
  state = {};
  render() {
    const { item, handleChange, handleSubmit, editedItem } = this.props;

    return (
      <div className='card card-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <i className='fas fa-book'></i>
              </div>
            </div>
            <input
              type='text'
              className='form-control text-capitalize'
              placeholder='add a to do item'
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className={
              editedItem
                ? 'btn btn-block btn-success mt-3'
                : 'btn btn-block btn-primary mt-3'
            }
          >
            {editedItem ? 'edit item' : 'add item'}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
