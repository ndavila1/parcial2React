import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './../../components/NavBar/navbar'
import './albums.sass'
class Albums extends Component {
    constructor() {
        super();
        this.state = {
            Albums: []
        };
    }
    componentDidMount() {
        this.getAlbums();
    }

    getAlbums() {
        axios.get('https://jsonplaceholder.typicode.com/albums'
        ).then(response => {
            console.log(response);
            this.setState({ Albums: response.data });
        });
    }
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className>
                    <div className="contenidoLista">
                        <lu>
                            {
                                this.state.Albums.map(albums =>
                                    <li className="listaAlbum">{albums.title}</li>
                                )
                            }
                        </lu>
                    </div>
                </div>
            </div>
        );
    }
}

export default Albums;
