import React, { Component } from 'react';
import { getComments } from '../api';
import Loading from '../components/Loading';

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };
  componentDidMount() {
    getComments(this.props.article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }
  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div>
          {comments.map((comment) => {
            return (
              <div className="comments-list">
                <h5 className="user-comment">{comment.author}</h5>
                <p key={comment.comment_id}>{comment.body}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Comments;
