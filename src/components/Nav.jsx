import React, { Component } from 'react';
import { getArticles } from '../api';

class Nav extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    getArticles().then((articles) => {
      //console.log(articles);
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
    //console.log(articles);
    return (
      <nav className="nav">
        {articles.map((article) => {
          return <li>{article.title}</li>;
        })}
      </nav>
    );
  }
}

export default Nav;
