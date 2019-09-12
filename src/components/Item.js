import React, { Component } from 'react'

import {
    connect
} from "react-redux";

import * as actions from "../redux/actions";
import Loader from "../components/Loader"
class Item extends Component {
    state = {
        image: {
            url: ""
        },
        story: ''
    }
    componentDidMount() {
        let fullPath = document.location.pathname.split('/');
        const articleId = fullPath[fullPath.length - 1];

        this.props.fetchArticle(articleId);
        // this.parseHtml(this.props.item.story)

    }



    componentWillReceiveProps(prevProps) {
        if (prevProps.item.story != this.props.item.story) {
            const parser = new DOMParser();
            let parsed = parser.parseFromString(prevProps.item.story, 'text/html');
            let body = document.createNodeIterator(parsed.body);
            body = body.root.innerHTML;
            this.setState({ story: body !== '' ? body : "<h1>Article unavailable</h1>" });
            this.getImageProps(prevProps.item.images);
            this.setState({ loading: false })
        }
    }

    getImageProps = (images) => {
        if (images.length > 0) {
            let image = JSON.stringify(images[images.length > 1 ? 1 : 0].url)
            image = image.replace(/["]/g, "")
            this.setState({ url: image })
        }
    }

    getContent = () => {
        let content = document.createElement("DIV");
        content.innerHTML = this.state.story
        return content.innerText;

    }
    render() {

        const { loading, item } = this.props

        if (loading) {
            return (<Loader />)
        }
        return (
            < div className="row" >

                < div className="col s12 offset-s0 l8 offset-l2 m8 offset-m2" >
                    <div className="card">
                        <h1 className="card-title center-align" style={{ paddingTop: "10px" }}>
                            <strong>{item.title}</strong>
                        </h1>

                        <div className="card-image ">
                            <img src={this.state.url} />
                        </div>
                        <div className="card-content" >

                            <p style={{ lineHeight: '2.6', align: "center" }}>
                                {this.getContent()}
                            </p>

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