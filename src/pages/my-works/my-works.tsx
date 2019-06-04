import React, { Component } from 'react';
import './my-works.scss';
import { MY_WORKS } from '../../models/consts/my-works';
import ProjectCard from '../../shared/components/project-card/project-card';
import Next from '../../shared/components/next/next';

class MyWorks extends Component<{ history: any }> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        window.scrollTo(0, 0);
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

                <Next history={this.props.history} prev={'/technologies'} next={'/contacts'} />
            </section>
        );
    }
}

export default MyWorks;
