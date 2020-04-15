import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { useDispatch, useSelector } from 'react-redux';
import { receiveUserInfo, requestUserInfo, receiveUserInfoError } from '../../actions';

import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SignUp() {

    const [open, setOpen] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({
        user: '',
        pass: '',
    })
    //error will control failed user inputs
    const [error, setError] = React.useState(false)
    const dispatch = useDispatch();



    const handleClickOpen = () => {
        setOpen(true);
        //if you re-open, no errors from previous inputs will be shown.
        setError(false)

    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleDone = (e) => {
        e.preventDefault();

        const handleSignUp = async () => {
            dispatch(requestUserInfo())

            let response = await fetch('/Signup', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            //successful sign up
            if (response.status === 200) {
                let userCredentials = await response.json()
                dispatch(receiveUserInfo(userCredentials))
                setOpen(false)
            }

            else if (response.status === 401) {
                console.log("User Already Exists!")
                //setError (will display error message)
                setError(true)
                //reset on CHange
                setUserInfo({
                    ...userInfo,
                    user: '',
                    pass: ''
                })
                //dispatch error action 
                dispatch(receiveUserInfoError())

            }
            else if (response.status === 400) {
                console.log('Some error occured signing up')
                //reset on CHange
                setUserInfo({
                    ...userInfo,
                    user: '',
                    pass: ''
                })
                dispatch(receiveUserInfoError())

            }
        }
        handleSignUp();

    }

    return (
        <div>
            <Button style={{ color: 'black' }} variant="outlined" onClick={handleClickOpen}>
                Create An Account
      </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Sign Up Here :)</DialogTitle>
                <form onSubmit={handleDone}>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the following information:
          </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            onChange={(e) => setUserInfo({
                                ...userInfo,
                                user: e.target.value,
                            })}
                            required
                            //if incorrect
                            helperText={!error ? "" : "Existing User."}

                        />
                        <TextField

                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            onChange={(e) => setUserInfo({
                                ...userInfo,
                                pass: e.target.value,
                            })}
                            required
                        />
                        <Button onClick={handleClose} >
                            Cancel
          </Button>
                        <Button type='submit'>
                            Done
          </Button>
                    </DialogContent>

                </form>

            </Dialog>
        </div>
    );
}
