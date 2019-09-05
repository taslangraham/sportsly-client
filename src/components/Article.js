import React, { Component, PropTypes } from 'react'
import { Link } from "react-router-dom";

class Article extends Component {
    state = {
        defaultImage: "https://lh3.googleusercontent.com/JP5PdXtfZXB4PmlBjpsEbU4ZoDGhFCpcY3Q1y4q1bBTt9u35PwMuIyM1QEzTgZ_j4R0"
    }
    getArticleIdUrl(url) {
        const sport = document.location.pathname.replace(/\//g, '');
        let id = url.split('/');
        url = `${sport}/${id[id.length - 1]}`
        return url;

    }
    render() {

        return (
            <Link to={this.getArticleIdUrl(this.props.article.links.api.self.href)} >
                <div>
                    <div className="col s12 offset-s0 l8 offset-l2 m8 offset-m2" >
                        <div className="card hoverable" >
                            <br />
                            <h6 className="card-title center-align" style={{}}>{this.props.article.headline}</h6>

                            <div className="card-content" >


                                <div className="card-image responsive-img" >
                                    <img src={this.props.article.images.length < 1 ? this.state.defaultImage : this.props.article.images[0].url} style={styles.image} />
                                </div>

                            </div>

                            <hr />
                            <p>{this.props.article.description}</p>
                        </div>
                    </div>
                </div>
            </Link >
        )
    }
}

const styles = {
    width: "600px",
    height: '400px',
    maxWidth: "600px",
    maxHeight: "400px",
    image: {
        height: '400px',
        width: '100%'
    }
}

export default Article