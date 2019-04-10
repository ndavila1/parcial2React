import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './../../components/NavBar/navbar';
import './Post.sass';

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts'
        ).then(response => {
            console.log(response);
            this.setState({ posts: response.data });
        });
    }
    render() {
        return (
            <div className="contenidoPost">
                <NavBar></NavBar>
                <ul>
                    <div className="container">
                        {
                            this.state.posts.map(posts =>
                                <div className="box">
                                    <li><h3>{posts.title}</h3>
                                        <p className="texto">{posts.body}</p></li>
                                </div>)
                        }

                    </div>
                </ul>
            </div>
        );
    }
}

export default Posts;
