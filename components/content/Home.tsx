import * as React from 'react';
import Content from './Content';

export default class Home extends Content<any>  {

    constructor(props) {

        super(props);

        this.className = "home";

    }

    getContent() {

        return <div>
            <p>Bienvenue sur mon site :)</p>
            <p>Vous pouvez trouver ici des infos sur mon profil professionnel.</p>
        </div>

    }

}