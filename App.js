import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import styles from './App.module.css';

class App extends Component {

    render() {
        return ( <
            div >
            <
            div className = { styles.Nav } > Crypto - Tracker < /div> <
            Layout >
            <
            /Layout>

            <
            /div>
        );
    }
}

export default App;