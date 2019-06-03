import { LayoutActionType } from './layout.actions';
import { AppRoute } from '../../models/interfaces/route';

export interface LayoutState {
    isMobileMenuOpened: boolean;
    routes: AppRoute[];
    pens: AppRoute[];
}

const initialState: LayoutState = {
    isMobileMenuOpened: false,
    routes: [
        {path: '/', label: 'About me'},
        {path: '/technologies', label: 'Technologies'},
        {path: '/my-works', label: 'My works'},
        {path: '/contacts', label: 'Contacts'},
    ],
    pens: [
        {path: 'https://romalei.github.io/projects/snake/', label: 'Snake'},
        {path: 'https://romalei.github.io/projects/tg-chart/', label: 'Charts'},
    ]
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
