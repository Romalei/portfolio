import { LayoutActionType } from './layout.actions';
import { AppRoute } from '../../models/interfaces/route';

export interface LayoutState {
    isMobileMenuOpened: boolean;
    routes: AppRoute[];
}

const initialState: LayoutState = {
    isMobileMenuOpened: false,
    routes: [
        { path: '/', label: 'About me' },
        { path: '/technologies', label: 'Technologies' },
        { path: '/my-works', label: 'My works' },
        { path: '/contacts', label: 'Contacts' },
    ],
};

export function layoutReducer(state: LayoutState = initialState, action: any): LayoutState {
    switch (action.type) {
        case LayoutActionType.ToggleMobileMenu:
            return {
                ...state,
                isMobileMenuOpened: action.payload != null ? action.payload : !state.isMobileMenuOpened,
            };
        default:
            return state;
    }
}
