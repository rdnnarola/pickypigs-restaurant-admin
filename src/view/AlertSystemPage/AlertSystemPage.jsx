import React,{setState, useState} from "react";
import {useSelector} from "react-redux";
import './AlertSystemPage.scss';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { SnackbarProvider, useSnackbar } from 'notistack';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }



const AlertSystemPage=()=>{

    let alertInfo = useSelector((state) => {
        return state.alert;
    });

    const [open,setOpen] =useState(true);

    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return(
        <>
        <section >
            {
                alertInfo.length > 0 ?
                    <React.Fragment>
                        {
                            alertInfo.map(alert => {
                                return (
                                    <React.Fragment key={alert.id}>
                                        {/* <div  className={`alert alert-${alert.color} alert-dismissible animated slideInDown fixed-top m-3`}>
                                            <button className="close">
                                                <i className="fa fa-times-circle"/>
                                            </button>
                                            <small>{alert.message}</small>
                                        </div> */}
                                        <Snackbar  anchorOrigin={{ vertical: 'top', horizontal: 'right'}} open={open}  onClose={handleClose}  key={"top" + "right"}>
                                            <Alert severity={alert.color}> {alert.message}  </Alert>                                               
                                        </Snackbar>
                                    </React.Fragment>
                                    
                                )
                            })
                        }

                         
                    </React.Fragment> : null
            }
        </section>
        </>
    )
}

export default AlertSystemPage;