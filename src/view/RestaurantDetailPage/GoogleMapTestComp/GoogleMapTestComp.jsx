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


function GoogleMapTestComp() {
  const [center, setCenter] = useState({ lat:0, lng: 0});
  const [defaultCenter, setDefaultCenter] = useState();
  const [inputValue, setInputValue] = React.useState('');
  const dispatch=useDispatch();
  const refMap = useRef(null);

  const handleBoundsChanged = () => {
    const mapCenter = refMap.current.getCenter(); //get map center
    setCenter(mapCenter);
  };


useEffect(()=>{
  getMyLocation();
},[])


const getMyLocation = () => {
  const location = window.navigator && window.navigator.geolocation
  if (location) {
    location.getCurrentPosition((position) => {
      console.log('Lat => ', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setDefaultCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
      setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
      dispatch(getLocationGeometryData(` ${position.coords.latitude}, ${position.coords.longitude}` ))

    })
  }
}



  const onDragEnd=() => {
    const position = refMap.current.getCenter(); //get map center
    console.log(position.toString());

    if(position){
      dispatch(getLocationGeometryData(position.toString().replace(/[()]/g,'')))
    }
}

let Restaurant_Location = useSelector((state) => {
  return state.googleData
});
  
  return (  
    <GoogleMap
      ref={refMap}
      defaultZoom={15}
      // defaultCenter={defaultCenter}
      center={defaultCenter}
      onBoundsChanged={handleBoundsChanged}
      onDragEnd={onDragEnd}
      
    >
      <Marker position={center}/>
     <button type="button"  onClick={getMyLocation} style={{background:'transparent',border:"none"}}>
       <img src={LocationIcon} className="img-fluid" width="30px" />
                {Restaurant_Location&&Restaurant_Location.location_data}
      </button>
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(GoogleMapTestComp));
