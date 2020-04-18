import { IProject } from '../interfaces/project';

export const MY_WORKS: IProject[] = [
    {
        name: 'Burger King',
        color: '#FEBE10',
        logo: 'img/my-works/burger-king.png',
        descr: 'A kiosk application for making purchases<br><br>' +
            'Technolgoies:<br>' +
            'HTML, Sass, Angular',
        subtitle: 'Kiosk application',
    },
    {
        name: 'Mixort',
        color: '#4DC223',
        logo: 'img/my-works/mixort.png',
        link: 'https://mixort.com',
        descr: 'Isomorphic website with admin panel.<br><br>' +
            'Technologies:<br>' +
            'Angular 7, Node.js, express, Angular Universal, Angular Material, MongoDB, NgRx, RxJS',
        subtitle: 'SPA with SSR + CMS',
    },
    {
        name: 'Gaia',
        color: '#212121',
        logo: 'img/my-works/gaia.png',
        descr: 'Users are able to buy courses and pass them. Administrators can to create courses, tests, review them,' +
            'solve issues which comes from users etc.<br><br>' +
            'Technologies:<br>' +
            'Angular 6, Node.js, express, Stripe, Angular Material, MongoDB, NgRx, RxJS',
        subtitle: 'Online learning platform',
    },
    {
        name: 'NDAX',
        color: '#00B8FF',
        logo: 'img/my-works/ndax.png',
        link: 'https://ndax.io/',
        descr: 'Buy/sell crypto or national currency. See everything in realtime. Do withdraw from your wallet' +
            ' or make deposits.<br><br>' +
            'Technologies:<br>' +
            'Angular 7, Bootstrap, NgRx, RxJS, Angular Universal',
        subtitle: 'Cryptocurrency trading platform',
    },
    {
        name: 'Galcon',
        color: '#00AEEC',
        logo: 'img/my-works/galcon.png',
        descr: 'This company is specialised on irrigation systems. The web app I have worked on gives you ' +
            'an ability to monitor and configure your irrigation system. You can create different programs ' +
            'and make a schedule for them, see the status of your system in realtime: which valve is ' +
            'irrigating at the moment, if there is any alert or something like that.',
        subtitle: 'Irrigation-control system',
    },
    {
        name: 'JET Technical',
        color: '#086090',
        logo: 'img/my-works/jet.png',
        link: 'https://www.jettechnical.com/',
        descr: 'Isomorphic website with admin panel.<br><br>' +
            'Technologies:<br>' +
            'Angular 7, Node.js, express, Angular Universal, Angular Material, MongoDB, NgRx, RxJS',
        subtitle: 'SPA with SSR + CMS',
    },
    {
        name: 'Via',
        color: '#778CFD',
        logo: 'img/my-works/via.png',
        link: 'https://viacustomer.com',
        descr: 'You can connect your Google/Facebook account. The website provides you statistics of reviews,' +
            ' it also has SMS messenger. You can send review invites this via messenger, customize the layout of ' +
            'invite, schedule notifications for your clients, like discounts on it\'s birthday and many other things.',
        subtitle: 'A tool for business',
    },
];
