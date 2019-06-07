import * as React from 'react';
import Content from './Content';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FaceIcon from '@material-ui/icons/DirectionsBike';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import DirectionsWalkCameraIcon from '@material-ui/icons/DirectionsWalk';
import LocalAirportWalkCameraIcon from '@material-ui/icons/LocalAirport';
import ScreenShareWalkCameraIcon from '@material-ui/icons/ScreenShare';
import Grid from '@material-ui/core/Grid';

import './css/hobbies';

export default class Hobbies extends Content<any>  {

    constructor(props) {

        super(props);

        this.className = "hobbies";

    }

    getContent() {

        return <div>
            <Grid container justify="center" className="toot">
                <GridList cellHeight={110} spacing={40} cols={2} className="grid" >
                        <GridListTile cols={1} className="gridTile" style={{background:'#7E7AB6'}}>
                            <FaceIcon fontSize="large" />
                            <p>VTT</p>
                        </GridListTile>
                        <GridListTile cols={1} className="gridTile" style={{background:'#3281A8'}}>
                            <PhotoCameraIcon fontSize="large" />
                            <p>Photo</p>
                        </GridListTile>
                        <GridListTile cols={2} className="gridTile" style={{background:'#AFD7EC'}}>
                            <ScreenShareWalkCameraIcon fontSize="large" />
                            <p>Dev Web</p>
                        </GridListTile>
                        <GridListTile cols={1} className="gridTile" style={{background:'#81B67A'}}>
                            <DirectionsWalkCameraIcon fontSize="large" />
                            <p>Rando</p>
                        </GridListTile>
                        <GridListTile cols={1} className="gridTile" style={{background:'#AC7AB6'}}>
                            <LocalAirportWalkCameraIcon fontSize="large" />
                            <p>Voyage</p>
                        </GridListTile>
                </GridList>
            </Grid>
        </div>

    }

}