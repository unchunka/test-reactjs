import * as React from 'react';
import Content from './Content';
import './css/skills';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';


export default class Skills extends Content<any> {

    languages:{label:string}[];
    frameworks:{label:string}[];
    tools:{label:string}[];

    constructor(props) {

        super(props);

        this.className = "pictures";

        this.languages = [
            {label:'PHP'},
            {label:'Javascript'},
            {label:'HTML/CSS'},
            {label:'Typescript'},
            {label:'SQL'}
        ];

        this.frameworks = [
            {label:'Symfony'},
            {label:'ReactJS'},
            {label:'Material-UI'},
            {label:'Silex'},
            {label:'Doctrine'},
            {label:'Selenium Webdriver JS'},
            {label:'NodeJS'},
            {label:'Mocha'},
            {label:'PHPUnit'},
        ];

        this.tools = [
            {label:'GIT'},
            {label:'PHPStorm'},
            {label:'SourceTree'},
            {label:'SublimeText'},
            {label:'Webpack'},
            {label:'Composer'},
            {label:'Npm'},
            {label:'TravisCI'},
            {label:'Stripe'},
        ];


    }

    getContent() {

        return <div>
            <h3>Mon expérience professionnelle</h3>
            <p>2012 > 2019 - Développeur web full-stack chez <a href="https://archipad.com/">Archipad</a></p>
            <ul>
                <li># Développement et maintien d'API sur un serveur web</li>
                <li># Ecriture de spécifications techniques et fonctionnelles</li>
                <li># Mise en place d’un système de tests unitaires et d'intégrations</li>
                <li># Développement et maintien de modules pour le site web</li>
                <li># Mise en place du système de paiement sur le site web</li>
            </ul>
            <h4>Languages :</h4>
            <Paper className="paperList">
                {this.languages.map(skill =>
                    <Chip label={skill.label}  variant="outlined" className="chipGreen"/>
                )}
            </Paper>
            <h4>Frameworks :</h4>
            <Paper className="paperList">
                {this.frameworks.map(framework =>
                    <Chip label={framework.label}  variant="outlined" className="chipPurple"/>
                )}
            </Paper>
            <h4>Software, Outils :</h4>
            <Paper className="paperList">
                {this.tools.map(tool =>
                    <Chip label={tool.label}  variant="outlined" className="chipOrange"/>
                )}
            </Paper>
            <h3>Projet perso</h3>
            <p><a href="http://www.flech.fr">www.flech.fr</a> : site pour partager les photos de mes sorties montagne à pied ou VTT.</p>
            <p>Flech est fait en PHP avec utilisation du framework Silex et utilise Twig pour la gestion template.</p>
            <p>Son code dispo sur <a href="https://github.com/unchunka/flech">Github.</a></p>
            <h3>Ma formation</h3>
            <ul>
                <li>2011 Licence professionnel SIL option DAII (développement intranet et internet) - IUT Aix-Marseille
                    Université</li>
                <li>2009 DUT informatique - IUT Aix-Marseille Université</li>
                <li>2008 Bac Scientifique option Physique-Chimie - Académie Aix-Marseille</li>
            </ul>
        </div>

    }

}