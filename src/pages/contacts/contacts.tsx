import React, { Component } from 'react';
import './contacts.scss';
import Footer from '../../navigation/footer/footer';
import Send from '../../shared/components/send/send';
import { http } from '../../services/http.service';
import { RequestStatus } from '../../models/enums/request-status';

const linkedin = process.env.PUBLIC_URL + '/img/linked-in.svg';
const vk = process.env.PUBLIC_URL + '/img/vk.svg';
const telegram = process.env.PUBLIC_URL + '/img/telegram.png';

class Contacts extends Component<{}, { message: string }> {

    form: any;
    messageStatus: RequestStatus | undefined = undefined;

    constructor(props: any) {
        super(props);
        this.form = React.createRef();
    }

    componentDidMount(): void {
        this.setState({});
    }

    onKeyDown = (e: any): void => {
        if (e.key === 'Enter') {
            if (!e.ctrlKey) {
                e.preventDefault();
                this.submit();
            } else {
                this.setState(state => ({ message: state.message + '\n' }));
            }
        }
    };

    onMessageChange = (e: any): void => {
        this.setState({ message: e.target.value });
    };

    submit = (e?: any): void => {
        e && e.preventDefault();
        if (!this.state.message) return;

        this.messageStatus = RequestStatus.PENDING;
        this.forceUpdate();
        http.sendEmail(this.state.message).then((res: string) => {
            this.messageStatus = RequestStatus.ERROR;
            this.forceUpdate();
            if (res !== 'OK') return;

            this.messageStatus = RequestStatus.SUCCESS;
            this.forceUpdate();
        });
    };

    render() {
        return (
            <section className="rz-contacts">
                <div className="rz-container rz-page__container rz-contacts__container">
                    <h1 className="rz-title">Contacts</h1>

                    <form ref={this.form} className="rz-form" onSubmit={this.submit}>
                        <p className="rz-email">
                            <b className="rz-accent">Email/skype:</b>&nbsp;
                            <a className="rz-skype" href="skype:romazherdev@gmail.com">romazherdev@gmail.com</a>
                        </p>

                        <textarea disabled={this.isDisabled}
                                  name="message" onKeyDown={this.onKeyDown}
                                  value={this.state && this.state.message || ''}
                                  className="rz-message"
                                  placeholder="Type your message here . . ." onChange={this.onMessageChange}/>
                        <button type="submit"
                                disabled={this.isDisabled}
                                className={this.btnClass}>
                            <span className="rz-submit__label">{this.btnText}</span>
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

    get btnText(): string {
        switch (this.messageStatus) {
            case RequestStatus.ERROR:
                return 'Resend';
            case RequestStatus.PENDING:
                return 'Sending...';
            case RequestStatus.SUCCESS:
                return 'Sent';
            default:
                return 'Send';
        }
    }

    get btnClass(): string {
        switch (this.messageStatus) {
            case RequestStatus.ERROR:
                return 'rz-submit rz-submit_error';
            case RequestStatus.PENDING:
                return 'rz-submit rz-submit_sending';
            case RequestStatus.SUCCESS:
                return 'rz-submit rz-submit_success';
            default:
                return 'rz-submit';
        }
    }

    get isDisabled(): boolean {
        return this.messageStatus === RequestStatus.SUCCESS
            || this.messageStatus === RequestStatus.PENDING;
    }
}

export default Contacts;
