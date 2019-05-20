export enum LayoutActionType {
    ToggleMobileMenu = '[LAYOUT] Toggle mobile menu',
}

export function toggleMobileMenuAction(payload?: boolean) {
    return { type: LayoutActionType.ToggleMobileMenu, payload };
}
