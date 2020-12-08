import React, { Component } from 'react';
import { getComments } from '../api';

class Comments extends Component {
  state = {
    comments: [],
  };
  componentDidMount() {
    getComments(this.props.article_id).then((comments) => {
      this.setState({ comments });
    });
  }
  render() {
    const { comments } = this.state;
    return (
      <div>
        {comments.map((comment) => {
          return (
            <p className="comments-list" key={comment.comment_id}>
              {comment.body}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Comments;
