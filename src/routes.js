import React, {Component} from 'react';
import { Route,Switch} from 'react-router-dom';
import Home from './components/home/home';
import Layout from './hoc/layout/layout'; 

import NewsArticles from '../src/components/Articles/news/post/index';
import VideoArticle from './components/Articles/Videos/video/index';
import NewsMain from './components/Articles/news/main/index';
import VideosMain from './components/Articles/Videos/main/index';
class Routes extends Component {
  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/news" exact component={NewsMain}/>
          <Route path="/articles/:id" exact component={NewsArticles}/>
          <Route path="/videos/:id" exact component={VideoArticle}/>
          <Route path="/videos" exact component={VideosMain} />
        </Switch>
      </Layout>
    
  )
}
}

export default Routes;