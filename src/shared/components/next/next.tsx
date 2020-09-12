import React, { Component } from 'react';
import './next.scss';
import { Breakpoint } from '../../../models/enums/breakpoint';
import { ROUTE_LABELS } from '../../../models/consts/route-labels';

class Next extends Component<{ history: any, prev: string, next: string }> {

    private readonly prevLabel: string;
    private readonly nextLabel: string;

    constructor(props: { history: any, prev: string, next: string }) {
        super(props);

        this.prevLabel = ROUTE_LABELS[props.prev];
        this.nextLabel = ROUTE_LABELS[props.next];
    }

    render() {
        return (
            <button className="rz-next" onClick={() => this.goNext()}>
                <span className="rz-next__back" onClick={() => this.goTo(this.props.prev)}>{this.prevLabel}</span>
                <span className="rz-next__text" onClick={() => this.goTo(this.props.next)}>{this.nextLabel}</span>
            </button>
        );
    }

    goNext(): void {
        if (window && window.innerWidth <= Breakpoint.LG) return;
        this.props.history.push(this.props.next);
    }

    goTo(path: string): void {
        this.props.history.push(path);
    }
}

export default Next;
