import React, { Component } from 'react';
import './my-works.scss';
import { MY_WORKS } from '../../models/consts/my-works';
import ProjectCard from '../../shared/components/project-card/project-card';

class MyWorks extends Component<{ history: any }> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <section className="rz-page rz-my-works">
                <div className="rz-container rz-page__container">
                    <h1 className="rz-title">My works</h1>
                    <div className="rz-cards">
                        {MY_WORKS.map(el => <ProjectCard key={el.name} project={el}/>)}
                    </div>
                </div>

                <div className="rz-next" onClick={() => this.goTo('/contacts')}>
                    <p className="rz-next__text">Contacts</p>
                </div>
            </section>
        );
    }

    goTo(path: string): void {
        this.props.history.push(path);
    }
}

export default MyWorks;
