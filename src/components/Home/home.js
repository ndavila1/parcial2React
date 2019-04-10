import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Login from './../../containers/Login/LoginFireBase';
import './home.sass';
const Home = () => {
    return (
        <section>
            <Header as='h2'>
                <Header.Content>
                    <Link to='panel'>Iniciar placeholder</Link>
                </Header.Content>    
            </Header>
            <Login/>
        </section>
    );
};
export default Home;