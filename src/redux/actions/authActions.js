import {FETCHING,FETCH_SUCCESS,FETCH_FAIL,AUTH_CHECKER,FORGOT_PASSWORD} from './types';

export const checkAuth = (user_email,user_password) => {
    return function(dispatch)
    {
        dispatch(fetching('True'));
           return fetch("https://cors-anywhere.herokuapp.com/https://www.mycampusmate.com/api/login", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: user_email,
              password: user_password,
              remember_me: "True",
            })
          }).then(response => response.json().then( responseJson => {
              if (responseJson.status === "OK") {
                 dispatch(fetch_success('Success'));
              } else if (responseJson.status === "Please confirm your email") {
                //alert("Confirm email"); 
                 dispatch(fetch_error('Confirm email'));
              } else {
               // alert("Wrong Password");
                 dispatch(fetch_error('Wrong password'));
              }
          })
        ).catch(function(error){
            //alert(error.message);
             dispatch(fetch_error(error.message));
        });
    }
};
export const ForgotPassword_action = (user_email) => {
    return function(dispatch)
    {
        return fetch("https://cors-anywhere.herokuapp.com/https://www.mycampusmate.com/api/user/reset-password", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: user_email
            })
        }).then(response => response.json().then( responseJson => {
            if(responseJson.status ==="OK")
            {
                dispatch(forgotPassword('Check your email for password reset instructions!'));
            }
            else{
                dispatch(forgotPassword('Could not find a user with the provided email'));
            }
          })
        ).catch(function(error){
             dispatch(fetch_error(error.message));
    });
    }
};
export const fetching = () => {
    return {
        type: FETCHING
    };
};
export const fetch_success = (data) => {
    return {
        type: FETCH_SUCCESS,
        payload: data
    };
};
export const fetch_error = (data) => {
    return {
        type: FETCH_FAIL,
        payload: data
    };
};
export const authReset = (data) => {
    return {
        type: AUTH_CHECKER,
        payload: data
    };
};
export const forgotPassword = (data) => {
    return {
        type: FORGOT_PASSWORD,
        payload: data
    };
};
export const forgotPasswordReset = (data) => {
    return {
        type: FORGOT_PASSWORD,
        payload: data
    };
};