import React, { Component } from 'react';
import { upVoteArticle } from '../api';
import ErrorMessage from './ErrorMessage';

class Voter extends Component {
  state = {
    hasVoted: false,
    vote_change: 0,
    hasError: false,
    errorMessage: '',
  };

  handleClick = (event) => {
    const { article_id } = this.props;
    this.setState({ vote_change: event, hasVoted: true }, () => {
      upVoteArticle(article_id, this.state.vote_change, event).catch(
        (error) => {
          const {
            response: { status, statusText },
          } = error;

          this.setState({
            hasError: true,
            errorMessage: `Article not found ... ${status}! ${statusText}`,
            hasVoted: false,
            vote_change: 0,
          });
        }
      );
    });
  };

  render() {
    const { votes } = this.props;
    const { vote_change, hasError, errorMessage, hasVoted } = this.state;

    if (hasError) {
      return <ErrorMessage errorMessage={errorMessage} />;
    } else {
      return (
        <div>
          <p>
            Number of votes: {votes + vote_change}
            <button
              className="up-vote"
              onClick={() => this.handleClick(1)}
              disabled={hasVoted}
            >
              ⬆
            </button>
            <button
              className="down-vote"
              onClick={() => this.handleClick(-1)}
              disabled={hasVoted}
            >
              ⬇
            </button>
          </p>
        </div>
      );
    }
  }
}

export default Voter;
