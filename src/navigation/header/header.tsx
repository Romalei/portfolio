import React, { Component } from 'react';
import './header.scss';
import { store } from '../../store';
import { toggleMobileMenuAction } from '../../store/layout/layout.actions';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../models/interfaces/route';
import { LayoutState } from "../../store/layout/layout.reducer";

class Header extends Component {

    routes: AppRoute[] = store.getState().layout.routes || [];
    pens: AppRoute[] = store.getState().layout.pens || [];

    constructor(params: any) {
        super(params);

        store.subscribe(() => {
            const state: { layout: LayoutState } = store.getState();
            this.routes = state.layout.routes || [];
            this.pens = state.layout.pens || [];
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
                        <li className="rz-nav__item">
                            <span>Pens</span>
                            <ul className="rz-submenu rz-nav__submenu">
                                {
                                    this.pens.map(p => (
                                        <li key={p.path} className="rz-submenu__item">
                                            <a href={p.path} target="_blank" className="rz-nav__link rz-submenu__link"
                                                     onClick={() => this.toggleMobileMenu(false)}>
                                                {p.label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
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
