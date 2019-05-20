import React, { Component } from 'react';
import './about-me.scss';
import Boy from '../../shared/components/boy/boy';
import { withRouter } from 'react-router-dom';

class AboutMe extends Component<{ history: any }> {
    
    render() {
        return (
            <section className="rz-about-me rz-page">
                <div className="rz-container rz-page__container">
                    <h1 className="rz-title">Welcome to my website</h1>
                    <div className="rz-info">
                        <div className="rz-info__block rz-boy">
                            <Boy/>
                        </div>
                        <div className="rz-info__block">
                            <div className="rz-faq">
                                <p className="rz-faq__subtitle">My name is</p>
                                <strong className="rz-faq__name">Roman Zherdev</strong>
                                <ul className="rz-faq-list">
                                    <li className="rz-faq-list__item">Who am I?</li>
                                    <li className="rz-faq-list__item">I'm a software engineer.</li>
                                    <li className="rz-faq-list__item">What is my job?</li>
                                    <li className="rz-faq-list__item">My job is to make websites. Mainly I create SPA
                                        using Angular.
                                    </li>
                                    <li className="rz-faq-list__item">How many years of experience do I have?</li>
                                    <li className="rz-faq-list__item">3 years in web development.</li>
                                    <li className="rz-faq-list__item">What’s the difference between me and other
                                        developers?
                                    </li>
                                    <li className="rz-faq-list__item">I have a magic cat which helps me to write beautiful
                                        code :3
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rz-next" onClick={() => this.goTo('/technologies')}>
                    <p className="rz-next__text">Technologies</p>
                </div>
            </section>
        );
    }

    goTo(path: string): void {
        this.props.history.push(path);
    }
}

export default withRouter<any>(AboutMe);
