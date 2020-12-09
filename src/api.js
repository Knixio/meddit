import axios from 'axios';

const ncNewsApi = axios.create({
  baseURL: 'https://matthew-nc-news-api.herokuapp.com/api',
});

export const getArticles = (topic) => {
  //console.log(topic);
  return ncNewsApi.get('/articles', { params: { topic } }).then(({ data }) => {
    //console.log(data.articles);
    return data.articles;
  });
};

export const getArticle = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const getTopics = () => {
  return ncNewsApi.get('/topics').then(({ data }) => {
    return data.topics;
  });
};
