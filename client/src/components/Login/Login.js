import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = () => {

    const responseGoogle = (response) => {
        console.log(response)
    }


    return (
        <div>
            <GoogleLogin
                clientId="636811091067-tosfcrkfmbrp1tvk8g6h9l4lla46qmj6.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

        </div>
    )

}

export default Login;