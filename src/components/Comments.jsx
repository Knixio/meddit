import React, { Component } from 'react';
import { getComments, postComment } from '../api';
import Loading from '../components/Loading';
import CommentAdder from '../components/CommentAdder';
import ArticleVoter from '../components/ArticlesVoter';

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

  addComment = (commentToPost) => {
    const { article_id } = this.props;
    postComment(commentToPost, article_id).then((newComment) => {
      this.setState((currentState) => {
        return {
          comments: [newComment, ...currentState.comments],
        };
      });
    });
  };

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div>
          <CommentAdder addComment={this.addComment} />
          {comments.map((comment) => {
            const newDate = comment.created_at;
            const date = new Date(`${newDate}`);

            return (
              <div className="comments-list" key={comment.comment_id}>
                <ul className="articles-votes">
                  <li>
                    <ArticleVoter
                      votes={comment.votes}
                      article_id={comment.article_id}
                    />
                  </li>
                  <li>
                    <h5 className="user-comment">
                      <strong>posted by: </strong>u/{comment.author}
                    </h5>
                  </li>
                </ul>
                <p>{comment.body}</p>
                <ul className="footer-ul">
                  <li className="li-left">Posted on: {date.toString()}</li>
                </ul>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Comments;

/*
Error when changing time to date.toString() from comment.created_at


index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `FilteredTopics`. See https://reactjs.org/link/warning-keys for more information.
    at FilteredTopics (http://localhost:3000/static/js/main.chunk.js:1675:5)
    at div
    at FocusHandlerImpl (http://localhost:3000/static/js/0.chunk.js:628:5)
    at FocusHandler (http://localhost:3000/static/js/0.chunk.js:603:19)
    at RouterImpl (http://localhost:3000/static/js/0.chunk.js:518:5)
    at LocationProvider (http://localhost:3000/static/js/0.chunk.js:377:5)
    at Location (http://localhost:3000/static/js/0.chunk.js:365:23)
    at Router
    at div
    at App

*/
