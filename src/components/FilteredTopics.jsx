import React, { Component } from 'react';
import { getArticles } from '../api';
import { Link } from '@reach/router';
import Loading from '../components/Loading';
import ArticleVoter from '../components/ArticlesVoter';

class FilteredTopics extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    getArticles(this.props.singleTopic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <ul>
          <h3>{`${this.props.singleTopic} topics`}</h3>
          {articles.map((article) => {
            return (
              <>
                <ul className="articles-votes">
                  <ArticleVoter
                    votes={article.votes}
                    article_id={article.article_id}
                  />
                </ul>
                <Link
                  className="article-list"
                  to={`/articles/${article.article_id}`}
                  key={article.article_id}
                >
                  {article.title}
                </Link>
              </>
            );
          })}
        </ul>
      );
    }
  }
}

export default FilteredTopics;
