import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="rz-footer">
                <div className="rz-container rz-footer__container">
                    <strong className="rz-name">Roman Zherdev 2019</strong>
                    <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a
                        href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a
                        href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                        target="_blank">CC
                        3.0 BY</a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;
