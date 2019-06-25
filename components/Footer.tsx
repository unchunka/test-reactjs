import {Component} from 'react';
import * as React from 'react';
import './css/footer';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

export default class Footer extends Component {

    render() {

        return <footer>
            <a href="https://www.linkedin.com/in/thierry-sambussy-62461b146/" title="Mon profil Linkedin">
                <img src="./doc/linkedin-logo.png" alt=""/>
            </a>
            <a href="https://github.com/unchunka/test-reactjs/" title="Mon code sur Github">
                <img src="./doc/github-logo.png" alt=""/>
            </a>
        </footer>

    }

}