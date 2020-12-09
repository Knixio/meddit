import { Router } from '@reach/router';
import './App.css';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Nav from './components/Nav';
import TopicsList from './components/TopicsList';
import FilteredTopics from './components/FilteredTopics';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Router>
        <Article path="/articles/:article_id" />
        <ArticleList path="/articles" />
        <TopicsList path="/topics" />
        <FilteredTopics path="/topics/:singleTopic" />
      </Router>
    </div>
  );
}

export default App;

//move articlelist to router
