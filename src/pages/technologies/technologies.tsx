import React, { Component } from 'react';
import './technologies.scss';
import { TECHNOLOGIES } from '../../models/consts/technologies';
import { TechImage } from '../../models/classes/tech-image';

class Technologies extends Component<{ history: any }> {

    images = TECHNOLOGIES.map(path => new TechImage(path));

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <section className="rz-technologies rz-page">
                <div className="rz-container rz-page__container">
                    <h1 className="rz-title">Technologies</h1>
                    <div className="rz-technologies__inner">
                        {this.images.map(el => (
                            <img key={el.path} src={el.path} style={el.style} alt={el.alt}/>
                        ))}
                    </div>
                </div>

                <div className="rz-next" onClick={() => this.goTo('/my-works')}>
                    <p className="rz-next__text">My works</p>
                </div>
            </section>
        );
    }

    goTo(path: string): void {
        this.props.history.push(path);
    }
}

export default Technologies;
