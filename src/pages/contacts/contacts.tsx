import React, { Component } from 'react';
import './contacts.scss';
import Footer from '../../navigation/footer/footer';
import Send from '../../shared/components/send/send';

const linkedin = process.env.PUBLIC_URL + '/img/linked-in.svg';
const vk = process.env.PUBLIC_URL + '/img/vk.svg';
const telegram = process.env.PUBLIC_URL + '/img/telegram.png';

class Contacts extends Component {
    render() {
        return (
            <section className="rz-contacts">
                <div className="rz-container rz-page__container rz-contacts__container">
                    <h1 className="rz-title">Contacts</h1>

                    <form className="rz-form">
                        <p className="rz-email">
                            <b className="rz-accent">Email/skype:</b>&nbsp;
                            <span>romazherdev@gmail.com</span>
                        </p>

                        <textarea className="rz-message" placeholder="Type your message"/>
                        <button className="rz-submit">
                            <span>Send</span>
                            <Send/>
                        </button>
                    </form>

                    <ul className="rz-links">
                        <li className="rz-links__item">
                            <a style={{ backgroundImage: 'url(' + linkedin + ')' }}
                               href="https://linkedin.com/in/romazherdev/"
                               target="_blank"/>
                        </li>
                        <li className="rz-links__item">
                            <a style={{ backgroundImage: 'url(' + vk + ')' }}
                               href="https://vk.com/romazherdev" target="_blank"/>
                        </li>
                        <li className="rz-links__item">
                            <a style={{ backgroundImage: 'url(' + telegram + ')' }}
                               href="tg://resolve?domain=romanzherdev" target="_blank"/>
                        </li>
                    </ul>
                </div>
                <Footer/>
            </section>

        );
    }
}

export default Contacts;
