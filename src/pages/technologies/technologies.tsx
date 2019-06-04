import React, { Component } from 'react';
import './technologies.scss';
import { TECHNOLOGIES } from '../../models/consts/technologies';
import { TechImage } from '../../models/classes/tech-image';
import Next from '../../shared/components/next/next';

class Technologies extends Component<{ history: any }> {

    images = TECHNOLOGIES.map(path => new TechImage(path));

    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        window.scrollTo(0, 0);98
    }

    render() {
        return (
            <section className="rz-technologies rz-page">
                <div className="rz-container rz-page__container">
                    <h1 className="rz-title">Technologies</h1>
                    <div className="rz-technologies__inner">
                        {this.images.map(el => (
                            <div key={el.path} style={el.style} className="rz-technologies__image-wrap">
                                <img src={el.path} alt={el.alt}/>
                            </div>
                        ))}
                    </div>
                </div>

                <Next history={this.props.history} prev={'/'} next={'/my-works'}/>
            </section>
        );
    }
}

export default Technologies;
