import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    onChange(event) {
        if(event.target.name === `email`) {
            this.setState({
                email: event.target.value,
            });
        } else {
            this.setState({
                password: event.target.value,
            });
        }
    }
    onFormSubmit (event) {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={(e) => this.onFormSubmit(e)}>
                <label>
                    {/* Email:
                    <input name="email" type="text" value={this.state.email} onChange={(e) => this.onChange(e)}/> */}
                    {/* Password:
                    <input name="password" type="text" value={this.state.password} onChange={(e) => this.onChange(e)}/> */}
                </label>
                <TextField
                    // id="standard-password-input"
                    name="email" 
                    type="text"
                    value={this.state.email} 
                    onChange={(e) => this.onChange(e)}
                    label="Email"
                    margin="normal"
                />
                <br/>
                <TextField
                    // id="standard-password-input"
                    name="password"  
                    value={this.state.password} 
                    onChange={(e) => this.onChange(e)}
                    label="Password"
                    type="password"
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={(e) => this.onFormSubmit(e)}>
                    Login
                </Button>
                {/* <Button >
                    <input type="submit" value="Submit"/>
                </Button> */}
            </form>
        );
    };
}

export default LoginForm;