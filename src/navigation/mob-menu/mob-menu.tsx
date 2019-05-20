import React, { Component } from 'react';
import './mob-menu.scss';
import { store } from '../../store';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../models/interfaces/route';
import { toggleMobileMenuAction } from '../../store/layout/layout.actions';

class MobMenu extends Component {

    isMobileMenuOpened: boolean = false;
    routes: AppRoute[] = store.getState().layout.routes || [];

    constructor(props: any) {
        super(props);

        store.subscribe(() => {
            const state = store.getState();
            this.isMobileMenuOpened = state.layout.isMobileMenuOpened;
            this.routes = state.layout.routes || [];
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
