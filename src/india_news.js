import React, { Component } from "react";
import axios from "axios";
import MediaCard from "./card";

class India extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=ef678d80cc70495184c2bf95d4576c9b"
      )
      .then(response => {
        const p = response.data;
        const posts = Object.keys(p.articles).map(j => p.articles[j]);
        this.setState({ posts });
        console.log(posts);
      });
  }

  render() {
    const newsItems = this.state.posts.map(article => (
      <MediaCard article={article} />
    ));
    return <div className="hi">{newsItems}</div>;
  }
}

export default India;
