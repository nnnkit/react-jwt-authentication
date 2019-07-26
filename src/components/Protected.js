import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import NewArticle from './NewArticle';
import SingleArticle from './SingleArticle';

export default class Protected extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/new" component={NewArticle} />
        <Route path="/articles/:slug" component={SingleArticle} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </div>
    );
  }
}
