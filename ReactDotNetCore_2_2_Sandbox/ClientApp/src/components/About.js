import React, { Component } from 'react';

export class About extends Component {

    //constructor() { }

    static displayName = About.name;

    render() {
        return (
            <div>
                <div>
                    This is the About page.
            </div>
                <div>And this is another div.</div>
            </div>            
        );
    }
}