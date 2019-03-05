import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './test.module.css';

export default class App extends Component {

   render() {

       return <div>
           <Header/>
           <Nav/>
           <Footer/>
       </div>

   }



}

class Nav extends Component {

    render() {

        return <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/pictures/">Pictures</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/pictures/" component={Pictures} />
            </div>
        </Router>

    }

}

class Header extends Component {

    render() {
        return <p>Header</p>
    }

}

class Footer extends Component {

    render() {
        return <p>Footer</p>
    }

}

class Content extends Component {


    getContent() {

        return <p>Default content</p>

    }

    render() {

        return this.getContent();

    }

}

class Pictures extends Content {

    getContent() {

        return <p>Pictures content</p>

    }

}


class About extends Content {

    getContent() {

        return <p>About content</p>

    }

}

class Home extends Content {

    constructor() {
        super();
        this.blaa = "error";

        console.log('STYLES',styles);
    }
    getContent() {

        return <div>
            <p className={styles.error}>Welcome</p>
        </div>

    }

}
