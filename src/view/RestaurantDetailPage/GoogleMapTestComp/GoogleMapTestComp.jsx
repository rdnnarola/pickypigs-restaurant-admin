import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";
import { getLocationGeometryData } from "../../../redux/actions/googleAction";
import { useDispatch, useSelector } from "react-redux";
import LocationIcon from '../../../assets/images/crosshair.svg'
import './GoogleMapTestComp.scss'
import {DEFAULT_LATITIDE,DEFAULT_LONGITUDE} from '../../../shared/constant'

function GoogleMapTestComp(props) {
  const [center, setCenter] = useState({ lat:0, lng: 0});
  const [defaultCenter, setDefaultCenter] = useState();
  const [mySelectedCoordinate, setMySelectedCoordinate] = React.useState('');
  const dispatch=useDispatch();
  const refMap = useRef(null);
  const [zoom, setZoom] = React.useState(16);
  const handleBoundsChanged = (props) => {
    const mapCenter = refMap.current.getCenter(); //get map center
    setCenter(mapCenter);
  };


useEffect(()=>{
  if(props.coordinates){
    dispatch(getLocationGeometryData(props.coordinates ))
    let array=JSON.parse("[" + props.coordinates + "]");
    setDefaultCenter({ lat: array[0], lng: array[1] });
    setCenter({ lat: array[0], lng: array[1] });
  }else{
    getLocation();
  }
},[dispatch,props.coordinates])


// const getMyLocation = () => {
//   const location = window.navigator && window.navigator.geolocation
//   if (location) {
//     location.getCurrentPosition((position) => {
//       // console.log('Lat => ', {
//       //   latitude: position.coords.latitude,
//       //   longitude: position.coords.longitude,
//       // });
//       setDefaultCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
//       setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
//       dispatch(getLocationGeometryData(` ${position&&position.coords.latitude}, ${position&&position.coords.longitude}` ))
//     })
//   }
// }

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
  } else { 
    console.log("Geolocation is not supported by this browser.") ;
  }
}

function showPosition(position) {
      console.log(position.toString());
      setDefaultCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
      setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
      dispatch(getLocationGeometryData(` ${position&&position.coords.latitude}, ${position&&position.coords.longitude}` ))
}
function showError(error) {
      setDefaultCenter({ lat: DEFAULT_LATITIDE, lng: DEFAULT_LONGITUDE });
      setCenter({ lat: DEFAULT_LATITIDE, lng: DEFAULT_LONGITUDE });
      dispatch(getLocationGeometryData(` ${DEFAULT_LATITIDE}, ${DEFAULT_LONGITUDE}` ))
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}

  const onDragEnd=() => {
    const position = refMap.current.getCenter(); //get map center
    // console.log(position.toString());

    if(position){
      dispatch(getLocationGeometryData(position.toString().replace(/[()]/g,'')))
    }
}

// let Restaurant_Location = useSelector((state) => {
//   return state.googleData
// });
  
  return (  
    <React.Fragment>
      <section className="GoogleMapTestComp">
        <GoogleMap
          ref={refMap}
          defaultZoom={zoom}
          zoom={zoom}
          defaultCenter={defaultCenter}
          center={defaultCenter}
          onBoundsChanged={handleBoundsChanged}
          onDragEnd={onDragEnd}
          className="my_google_map"
        >
          <Marker position={center}/>
        <button type="button" className="get_my_current_location"  onClick={()=>{getLocation();}} >
          <img src={LocationIcon} className="img-fluid " width="30px" />
                    {/* {Restaurant_Location&&Restaurant_Location.location_data} */}
          </button>
        </GoogleMap>
      </section>
    </React.Fragment>
  );
}

export default withScriptjs(withGoogleMap(GoogleMapTestComp));
