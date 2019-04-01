import * as React from 'react';
import {Component} from 'react';

import './css/content';


export default class Content<StateInterface> extends Component<any,StateInterface> {

    className:string;

    constructor(props) {

        super(props);

        this.className = null;

    }

    getContent() {

        return <p>Default content</p>

    }

    render() {

        return <div className="content">
                <div className={this.className}>
                    {this.getContent()}
                </div>
        </div>

    }

}