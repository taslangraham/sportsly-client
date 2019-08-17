import React, { Component } from 'react'

import {
    connect
} from "react-redux";

import * as actions from "../redux/actions";

class Item extends Component {
    state = {
        parsedStory: ''
    }
    componentDidMount() {
        let fullPath = document.location.pathname.split('/');
        const articleId = fullPath[fullPath.length - 1];

        this.props.fetchArticle(articleId);
        // this.parseHtml(this.props.item.story)

    }



    componentWillReceiveProps(nextProps) {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(nextProps.item.story, 'text/html');

        let content = document.getElementById("content")
        const body = document.createNodeIterator(htmlDoc.body);

        this.setState({ parsedStory: body.root.innerHTML });

        content.innerHTML = this.state.parsedStory;
    }


    render() {
        const { loading, item } = this.props;

        if (this.loading) {
            return (<h1>loading</h1>)
        }
        return (
            < div className="row" >

                < div className="col s8 offset-s2 l8 offset-l2 m8 offset-m2" >
                    <div className="card">
                        <p className="card-title">{item.title}</p>

                        <div className="card-image">
                            {/* <img src="images/sample-1.jpg" /> */}
                        </div>
                        <div className="card-content" >
                            <section>
                                <article id="content">

                                </article>
                            </section>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div >
            </div >

        )
    }
}


const mapStateToProps = ({
    item: article
}) => {
    return article;
};

export default connect(
    mapStateToProps,
    actions
)(Item);