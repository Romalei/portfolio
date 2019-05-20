import { IStyle } from '../interfaces/style';

export class TechImage {
    constructor(public path: string) {}

    get alt(): string {
        const match = this.path.match(/\/(.*)\/(.*)\..*/);
        return (match && match[2]) as string;
    }

    get style(): IStyle {
        switch (this.alt.toLocaleLowerCase()) {
            case 'angular':
                return getStyle(46, 0);
            case 'bootstrap':
                return getStyle(60, 82);
            case 'chartjs':
                return getStyle(72, 70);
            case 'docker':
                return getStyle(18, 40);
            case 'figma':
                return getStyle(0, 50);
            case 'git':
                return getStyle(88, 65);
            case 'gulp':
                return getStyle(80, 36);
            case 'html':
                return getStyle(57, 30);
            case 'jenkins':
                return getStyle(33, 70);
            case 'jira':
                return getStyle(80, 84);
            case 'js':
                return getStyle(15, 57);
            case 'material':
                return getStyle(39, 87);
            case 'mongo':
                return getStyle(90, 18);
            case 'mysql':
                return getStyle(74, 20);
            case 'nest':
                return getStyle(9, 9);
            case 'node':
                return getStyle(80, 5);
            case 'pagespeed':
                return getStyle(2, 28);
            case 'photoshop':
                return getStyle(89, 42);
            case 'react':
                return getStyle(30, 7);
            case 'redux':
                return getStyle(47, 26);
            case 'ngrx':
                return getStyle(27, 23);
            case 'rxjs':
                return getStyle(62, 10);
            case 'sass':
                return getStyle(36, 40);
            case 'trello':
                return getStyle(22, 84);
            case 'ts':
                return getStyle(45, 65);
            case 'vue':
                return getStyle(4, 78);
            case 'webpack':
                return getStyle(61, 57);
            case 'zeplin':
                return getStyle(74, 54);
            default:
                return getStyle(0, 0);
        }
    }
}

function getStyle(x: number, y: number): IStyle {
    return {
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${Math.random() * .75}s`,
    };
}

