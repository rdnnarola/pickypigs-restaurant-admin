import React, { useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

const TokenVerificationPage=()=>{
    const params=useParams();
	let  mytoken  = params.logintoken;
    const history = useHistory();

    useEffect(()=>{
        if(mytoken){
            localStorage.setItem('access_token',mytoken);
            localStorage.setItem('role','restaurant_admin');
            history.push("/")
            axios.defaults.headers.common = { "x-access-token": mytoken };
        }
    },[useEffect,mytoken]);
    return(
        <React.Fragment>

        </React.Fragment>
    )
}

export default TokenVerificationPage;
