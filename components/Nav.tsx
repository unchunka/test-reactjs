import {Component} from "react";
import * as React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab, {TabProps} from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';
import {Link, Route} from "react-router-dom";
import './css/nav';
import Button from '@material-ui/core/Button';

export interface Page {
    name:string,
    component:Component,
    path:string,
    index:number;
}

interface NavState {
    index:number,
    anchorEl:any
}

export default class Nav extends Component<any,NavState> {

    pages:Page[];

    constructor(props) {

        super(props);

        this.state = {
            index:0,
            anchorEl:null
        };

        this.pages = props.pages;

        let index = this.getCurrentIndex();
        this.state.index = index;

        this.handleChangeOnTabs = this.handleChangeOnTabs.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
        this.handleClickOnMenu = this.handleClickOnMenu.bind(this);
        this.handleClickOnMenuItem = this.handleClickOnMenuItem.bind(this);

    }

    handleChangeOnTabs(event, index:number) {

        this.setState({index:index});

    }

    getCurrentIndex():number {

        let pathName = window.location.pathname;

        let index = 0;
        this.pages.forEach(function(page){
            if (page.path == pathName) {
                index = page.index;
            }
        });

        return index;

    }

    handleCloseMenu(event) {

        this.setState({ anchorEl: null });

    }

    handleClickOnMenu(event) {

        this.setState({ anchorEl: event.currentTarget });

    }

    handleClickOnMenuItem() {

        let index = this.getCurrentIndex();
        this.setState({ index:index });

    }

    handleDownloadClick() {

        window.open('doc/CV.pdf');

    }

    render() {

        const anchorEl = this.state.anchorEl;

        const open = Boolean(anchorEl);

        return <AppBar position="static" color="default" className="nav" component="div">
            <Toolbar>
                <IconButton color="inherit" aria-label="Open drawer">
                    <MenuIcon onClick={this.handleClickOnMenu} className="menuIcon"/>
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleCloseMenu}
                >
                    {this.pages.map(item =>
                        <MenuItem onClick={this.handleClickOnMenuItem} className="menuItem">
                            <Link className="link" to={item.path}>{item.name}</Link>
                        </MenuItem>
                    )}
                </Menu>
                <div className="rightToolbar">
                    <Button className="download" onClick={this.handleDownloadClick}>Télécharger mon CV</Button>
                </div>
            </Toolbar>
            <Tabs value={this.state.index} onChange={this.handleChangeOnTabs} classes={{indicator:'indicator'}} className={"tabs"}>
                {this.pages.map(item =>
                    //@ts-ignore
                    <Tab label={item.name} component={Link} to={item.path}></Tab>
                )}
            </Tabs>
        </AppBar>
    }

}
