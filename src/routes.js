import React, {Component} from 'react';
import { Route,Switch} from 'react-router-dom';
import Home from './components/home/home';
import Layout from './hoc/layout/layout'; 

import NewsArticles from '../src/components/Articles/news/post/index';
import VideoArticle from './components/Articles/Videos/video/index'
class Routes extends Component {
  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/articles/:id" exact component={NewsArticles}/>
          <Route path="/videos/:id" exact component={VideoArticle}/>
        </Switch>
      </Layout>
    
  )
}
}

export default Routes;