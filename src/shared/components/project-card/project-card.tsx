import React, { Component } from 'react';
import './project-card.scss';
import { IProject } from '../../../models/interfaces/project';

class ProjectCard extends Component<{ project: IProject }> {

    data: IProject;

    constructor(props: { project: IProject }) {
        super(props);

        this.data = props.project;
    }

    render() {
        return (
            <div className="rz-project-card" style={{ borderBottomColor: this.data.color }}>
                <img className="rz-project-card__logo" src={this.data.logo} alt={this.data.name}/>
                <h3 className="rz-project-card__title" style={{ color: this.data.color }}>{this.data.name}</h3>

                <div style={{ backgroundColor: this.data.color }} className="rz-project-card__overlay rz-description">
                    <h3 className="rz-description__title">{this.data.name}</h3>
                    <p className="rz-description__subtitle">{this.data.subtitle}</p>
                    <p className="rz-description__text" dangerouslySetInnerHTML={{ __html: this.data.descr }}/>
                    {this.data.link ? <a className="rz-description__link" href={this.data.link} target="_blank">Check it out</a> : ''}
                </div>
            </div>
        );
    }

}

export default ProjectCard;
