import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getLogin } from "../redux/actions/generalActions";
import { useDispatch, useSelector } from "react-redux";
import CustomLoadingComp from "../components/CustomLoadingComp/CustomLoadingComp";

const TokenVerificationPage = () => {
  const params = useParams();
  let mytoken = params.logintoken;
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (mytoken) {
      console.log("sss");
      // localStorage.setItem('access_token',mytoken);
      // localStorage.setItem('role','restaurant_admin');
      // history.push("/")
      // axios.defaults.headers.common = { "x-access-token": mytoken };
      dispatch(getLogin(mytoken, history));
    }
    // eslint-disable-next-line
  }, [mytoken]);

  let myLoading = useSelector((state) => {
    return state.general.isLoading;
  });

  return (
    <React.Fragment>
      {myLoading && myLoading ? <CustomLoadingComp /> : null}
    </React.Fragment>
  );
};

export default TokenVerificationPage;
