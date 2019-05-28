import React, { Component } from 'react';

class Particles extends Component {


    readonly count: number = 5;

    render() {
        return (
            <div className="rz-particles">
                {this.getParticles()}
            </div>
        );
    }

    getParticles(): any {
        for (let i =  this.count; i--;) {

        }
    }
}

export default Particles;
