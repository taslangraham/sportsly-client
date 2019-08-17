import React, {
  Component,
} from "react";

import * as actions from "../redux/actions";

import {
  connect
} from "react-redux";

import Article from "../components/Article"
class articles extends Component {

  componentDidMount() {
    const path = this.props.location.pathname.replace(/\//g, '');
    this.props.fetchArticlesBySport(path);
  }



  render() {
    const {
      articles
    } = this.props


    return (
      <div className="row" >
        {articles.map((article, i) => (
          < Article article={article} key={i} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({
  articles
}) => {
  return articles;
};

export default connect(
  mapStateToProps,
  actions
)(articles);