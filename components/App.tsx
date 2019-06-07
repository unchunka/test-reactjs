import {Component} from 'react';
import * as React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Home from "./content/Home";
import Skills from "./content/Skills";
import Contact from "./content/Contact";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Page} from './Nav';
import Hobbies from "./content/Hobbies";

export default class App extends Component {

    pages:Page[];

    constructor(props) {

        super(props);

        let regex = /(.*)\/.*$/;
        let match = regex.exec(window.location.pathname);
        let pathName = match[1];

        this.pages = [
            { name:'home', component: Home, path: pathName , index:0},
            { name:'compétences', component: Skills, path: pathName + '/skills', index:1},
            { name:'loisirs', component: Hobbies, path: pathName + '/hobbies', index:2},
            { name:'contact', component: Contact, path: pathName + '/contact', index:3}
        ]

    }

    render() {

       return <div id="main">
           <Header/>
           <Router>
               <div id="body">
                   <Nav pages={this.pages}/>
                   {this.pages.map(item =>
                       <Route path={item.path} exact component={item.component} />
                   )}
               </div>
           </Router>
           <Footer/>
       </div>
   }

}