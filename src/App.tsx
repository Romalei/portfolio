import React, { Component } from 'react';
import './App.scss';
import Header from './navigation/header/header';
import MobMenu from './navigation/mob-menu/mob-menu';
import Main from './navigation/main/main';
import { store } from './store';

class App extends Component {

    constructor(params: any) {
        super(params);

        store.subscribe(() => {
            const state = store.getState();
            // toggle body scroll possibility
            document && document.body.classList.toggle('rz-scrollable', !state.layout.isMobileMenuOpened);
        });
    }

    render() {
        return (
            <div className="rz-app">
                <Header/>
                <MobMenu/>
                <Main/>
            </div>
        );
    }
}

export default App;
