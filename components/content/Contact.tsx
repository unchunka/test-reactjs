import * as React from 'react';
import Content from './Content';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './css/contact';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

interface ContactState {
    email:string,
    name:string,
    message:string,
    open:boolean,
    errorEmail:boolean,
    errorName:boolean,
    errorMessage:boolean
}

export default class Contact extends Content<ContactState> {

    constructor(props) {

        super(props);

        this.state = { email: null, name:null, message:null, open:false, errorEmail:false,errorName:false,errorMessage:false };

        this.className = "contact";

        this.handleChangeOnEmail = this.handleChangeOnEmail.bind(this);
        this.handleChangeOnName = this.handleChangeOnName.bind(this);
        this.handleChangeOnMessage = this.handleChangeOnMessage.bind(this);
        this.handleClickOnSend = this.handleClickOnSend.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);

    }

    handleChangeOnEmail(event) {

        this.setState({ email: event.target.value });

    }

    handleChangeOnName(event) {

        this.setState({ name: event.target.value });

    }

    handleChangeOnMessage(event) {

        this.setState({ message: event.target.value });

    }

    handleClickOnSend(event) {

        const axios = require('axios');
        var qs = require('qs');

        let self = this;

        this.setState({ errorEmail: !this.state.email });
        this.setState({ errorMessage: !this.state.message });

        if (this.state.email && this.state.message) {

            axios.post('mail.php', qs.stringify({
                email: this.state.email,
                name: this.state.name,
                message: this.state.message
            }))
            .then(function (response) {
                self.setState({ open: true });
            })
            .catch(function (error) {
                console.log(error);
            });

        }

    }

    handleCloseDialog() {

        this.setState({ open: false });

    }

    getContent() {

        return <div>
            <Grid container justify = "center">
                <form autoComplete="off">
                    <TextField
                        required
                        label="Email"
                        margin="normal"
                        className="textField"
                        onChange={this.handleChangeOnEmail}
                        fullWidth
                        error= {this.state.errorEmail}
                    />
                    <TextField
                        label="Nom"
                        margin="normal"
                        className="textField"
                        onChange={this.handleChangeOnName}
                        fullWidth
                        error= {this.state.errorName}
                    />
                    <TextField
                        required
                        label="Message"
                        placeholder="Taper votre message"
                        multiline
                        margin="normal"
                        className="textField"
                        onChange={this.handleChangeOnMessage}
                        fullWidth
                        error= {this.state.errorMessage}
                    />
                    <Button variant="contained" className="send" onClick={this.handleClickOnSend}>
                        Envoyer
                    </Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleCloseDialog}
                        classes={{paper:'confirmEmailSent'}}
                    >
                        <DialogTitle>Email envoyé :)</DialogTitle>
                        <p>Votre email a bien été envoyé !</p>
                    </Dialog>
                </form>
            </Grid>
        </div>

    }

}