import React, { Component, PropTypes } from 'react'
import { Link } from "react-router-dom";

class Article extends Component {
    state = {
        defaultImage: "https://lh3.googleusercontent.com/JP5PdXtfZXB4PmlBjpsEbU4ZoDGhFCpcY3Q1y4q1bBTt9u35PwMuIyM1QEzTgZ_j4R0",
        isSoccer: false
    }

    getSportPath() {
        return document.location.pathname;

    }
    isSoccer(value) {
        return value.split("/").includes("soccer");
    }

    getArticleIdUrl(url) {
        const sport = this.getSportPath();
        console.log(sport)
        const id = url.split('/');
        url = `${sport}/${id[id.length - 1]}`
        return this.isSoccer(url) ? this.props.article.links.web.href : url;
        // return url

    }


    render() {

        return (

            <div className="row">
                <a href={this.getArticleIdUrl(this.props.article.links.api.self.href)} target={this.isSoccer(this.getSportPath()) ? "_blank" : "_self"}>
                    <div className="col s12 offset-s0 l8 offset-l2 m8 offset-m2" >

                        <div className="card hoverable" >
                            <div className="card-image" >
                                <img src={this.props.article.images.length < 1 ? this.state.defaultImage : this.props.article.images[0].url} style={styles.image} />
                            </div>

                            <h6 className="card-title center-align">{this.props.article.headline}</h6>

                            <div className="card-content" >
                                 dangerouslySetInnerHTML={{ __html:this.props.article.description}}
                                //this.props.article.description
                            </div>

                        </div>
                    </div>
                </a>
            </div >


        )
    }
}

const styles = {
    width: "600px",
    height: '400px',
    maxWidth: "600px",
    maxHeight: "400px",
    image: {
        margin: 'auto',
        height: '200px',
        // width: 'auto',
        overflow: 'hidden'
    }
}

export default Article
