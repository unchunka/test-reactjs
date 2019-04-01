import * as React from 'react';
import Content from './Content';
import './css/skills';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';


export default class Skills extends Content<any> {

    skills:{label:string}[];

    constructor(props) {

        super(props);

        this.className = "pictures";

        this.skills = [
            {label:'PHP'},
            {label:'Javascript'},
            {label:'HTML/CSS'},
            {label:'Typescript'},
            {label:'SQL'},
            {label:'Webpack'},
            {label:'Symfony'},
            {label:'ReactJS'},
            {label:'Material-UI'},
            {label:'Github'},
            {label:'Travis CI'},
            {label:'Doctrine'}
        ]

    }

    getContent() {

        return <div>
            <h3>Ma formation</h3>
            <p>Bac S -> DUT Informatique Aix en Provence -> Licence pro Dev Web Aix en Provence</p>
            <h3>Mon expérience professionnelle</h3>
            <p>Web Developer de chez <a href="https://archipad.com/">Archipad</a> depuis 2012 :</p>
            <ul>
                <li>Développement d'API sur un serveur web</li>
                <li>Ecriture de specs techniques et fonctionnelles</li>
                <li>Gestion du versioning de code avec GIT</li>
                <li>Mise en place de tests d'intégration continue</li>
                <li>Développement de modules sur la web app</li>
                <li>Mise en place de tests automatiques</li>
                <li>Travail avec le méthode SCRUM</li>
            </ul>
            <h3>List des languages/frameworks sur lequels j'ai l'habitude de travailler :</h3>
            <Paper className="paperList">
                {this.skills.map(skill =>
                    <Chip label={skill.label}  variant="outlined" className="chip"/>
                )}
            </Paper>
            <h3>Autre réalisation : <a href="http://www.flech.fr">www.flech.fr</a></h3>
        </div>

    }

}