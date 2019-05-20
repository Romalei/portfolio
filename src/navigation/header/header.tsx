import React, { Component } from 'react';
import './header.scss';
import { store } from '../../store';
import { toggleMobileMenuAction } from '../../store/layout/layout.actions';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../models/interfaces/route';

class Header extends Component {

    routes: AppRoute[] = store.getState().layout.routes || [];

    constructor(params: any) {
        super(params);

        store.subscribe(() => {
           const state = store.getState();
           this.routes = state.layout.routes || [];
        });
    }

    toggleMobileMenu(flag?: boolean): void {
        store.dispatch(toggleMobileMenuAction(flag));
    }

    render() {
        return (
            <header className="rz-header">
                <nav className="rz-container rz-header__container">
                    <ul className="rz-nav">
                        {
                            this.routes.map(r => (
                                <li className="rz-nav__item" key={r.path}>
                                    <NavLink exact to={r.path} className="rz-nav__link"
                                             activeClassName='rz-nav__link_active'
                                             onClick={() => this.toggleMobileMenu(false)}>
                                        {r.label}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <button className="rz-menu-btn" onClick={() => this.toggleMobileMenu()}>
                        <span className="rz-menu-btn__ball"/>
                    </button>
                </nav>
            </header>
        );
    }
}

export default Header;
