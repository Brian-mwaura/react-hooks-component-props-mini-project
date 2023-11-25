import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import data from '../data/blog';

function App() {
  return (
    <div>
      <Header name="My Blog" />
      <About
        image="https://via.placeholder.com/215"
        about="This is my personal blog."
      />
      <ArticleList posts={data.posts} />
    </div>
  );
}

export default App;