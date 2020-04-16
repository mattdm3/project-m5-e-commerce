import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import styled from "styled-components";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
import { LoginCart, receiveUserInfo, requestUserInfo, receiveUserInfoError } from '../../actions';

import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Login({ setLoginState }) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));



    const [open, setOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({
        user: '',
        pass: '',
    })
    const dispatch = useDispatch();

    const [error, setError] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
        setError(false)
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleDone = (e) => {
        e.preventDefault();
        console.log(userInfo, 'OUTSIDE ASYNC')

        const handleLogin = async () => {
            //requestUserInfo - change status to loading
            dispatch(requestUserInfo())
            console.log(userInfo, 'inside login')
            try {

                let response = await fetch('/Login', {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                //authenticated
                if (response.status === 200) {
                    console.log("Success")
                    let userCredentials = await response.json()
                    dispatch(LoginCart(userCredentials.data))
                    dispatch(receiveUserInfo(userCredentials))

                    setOpen(false)
                    setLoginState(false)
                }
                else if (response.status === 404) {
                    console.log("User Not Found!")
                    //reset on CHange

                    setUserInfo({
                        ...userInfo,
                        user: '',
                        pass: ''
                    })
                    setError(true)
                    dispatch(receiveUserInfoError())
                }
                else if (response.status === 400 || response.status === 401) {
                    //reset on CHange

                    setUserInfo({
                        ...userInfo,
                        user: '',
                        pass: ''
                    })
                    console.log('Some error occured login')
                    dispatch(receiveUserInfoError())
                }

            }
            catch (err) {
                console.log(err, 'CATCH ERROR')
            }


        }
        handleLogin();

    }

    return (
        <div>
            <StyledLoginButton onClick={handleClickOpen}>
                Login
      </StyledLoginButton>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <form onSubmit={handleDone}>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the following information:
          </DialogContentText>
                        <TextField
                            autoFocus
                            value={userInfo.user}
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
                            helperText={!error ? '' : "User not found. You may need to Sign Up!"}
                        />
                        {/* PASSWORD */}
                        <TextField
                            value={userInfo.pass}
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


const StyledLoginButton = styled.button`
    width: 50px; 
    border: none; 
    background: none; 
    color: white;
    font-weight: 600; 
    border-radius: 3px; 
    
    transition-duration: 400ms; 
    cursor:pointer; 
    font-size: .8rem;

`