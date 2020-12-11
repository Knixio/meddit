import React, { Component } from 'react';

class CommentAdder extends Component {
  state = {
    comment: '',
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    const { comment } = this.state;
    const { addComment } = this.props;
    event.preventDefault();
    addComment({ body: comment, username: 'tickle122' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            placeholder="Add Your Comment Here"
            type="text"
            name="comment"
            onChange={this.handleChange}
            value={this.state.comment}
          ></input>
        </label>
        <button type="submit">Post</button>
      </form>
    );
  }
}

export default CommentAdder;
