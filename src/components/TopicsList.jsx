import React, { Component } from 'react';
import { getTopics } from '../api';
import { Link } from '@reach/router';
import Loading from '../components/Loading';

class TopicsList extends Component {
  state = {
    topics: [],
    articles: [],
    isLoading: true,
  };
  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }
  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div>
          <h2>Topics</h2>
          <ul>
            {topics.map((topic) => {
              return (
                <Link
                  to={`/topics/${topic.slug}`}
                  className="article-list"
                  key={topic.slug}
                >
                  {topic.slug}
                </Link>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

export default TopicsList;
