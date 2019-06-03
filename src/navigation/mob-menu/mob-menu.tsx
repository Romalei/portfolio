import React, { Component } from 'react';
import './mob-menu.scss';
import { store } from '../../store';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../models/interfaces/route';
import { toggleMobileMenuAction } from '../../store/layout/layout.actions';
import { LayoutState } from "../../store/layout/layout.reducer";

class MobMenu extends Component {

    isMobileMenuOpened: boolean = false;
    routes: AppRoute[] = store.getState().layout.routes || [];
    pens: AppRoute[] = store.getState().layout.pens || [];

    constructor(props: any) {
        super(props);

        store.subscribe(() => {
            const state: { layout: LayoutState } = store.getState();
            this.isMobileMenuOpened = state.layout.isMobileMenuOpened;
            this.routes = state.layout.routes || [];
            this.pens = state.layout.pens || [];
            this.forceUpdate();
        });
    }

    closeMobileMenu = (): void => {
        store.dispatch(toggleMobileMenuAction(false));
    };

    render() {
        return (
            <nav className={this.menuWrapperClass}>
                <ul className={this.menuClass}>
                    {
                        this.routes.map(r => (
                            <li className="rz-mob-menu__item" key={r.path}>
                                <NavLink exact to={r.path} className="rz-mob-menu__link"
                                         activeClassName='rz-mob-menu__link_active'
                                         onClick={this.closeMobileMenu}>
                                    {r.label}
                                </NavLink>
                            </li>
                        ))
                    }
                    <li className="rz-mob-menu__item rz-mob-menu__item_header">Pens:</li>
                    {
                        this.pens.map(p => (
                            <li key={p.path} className="rz-mob-menu__item rz-mob-menu__item_small">
                                <a href={p.path} className="rz-mob-menu__link rz-mob-menu__link_small">{p.label}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        );
    }

    get menuWrapperClass(): string {
        return this.isMobileMenuOpened ? 'rz-mob-menu-wrapper rz-mob-menu-wrapper_opened' : 'rz-mob-menu-wrapper';
    }

    get menuClass(): string {
        return this.isMobileMenuOpened ? 'rz-mob-menu rz-mob-menu_opened' : 'rz-mob-menu';
    }
}

export default MobMenu;
