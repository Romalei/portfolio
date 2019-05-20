import React, { Component } from 'react';
import AboutMe from '../../pages/about-me/about-me';
import Technologies from '../../pages/technologies/technologies';
import MyWorks from '../../pages/my-works/my-works';
import Contacts from '../../pages/contacts/contacts';
import { Route, Switch } from 'react-router';

class Main extends Component {
    render() {
        return (
            <main className="rz-main">
                <Switch>
                    <Route exact path='/' component={AboutMe}/>
                    <Route exact path='/technologies' component={Technologies}/>
                    <Route exact path='/my-works' component={MyWorks}/>
                    <Route exact path='/contacts' component={Contacts}/>
                </Switch>
            </main>
        );
    }
}

export default Main;
