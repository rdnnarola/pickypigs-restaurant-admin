import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import { API_KEY, GOOGLE_MAP_API_URL, HOST_URL, GOOGLE_PLACE_API_URL } from '../../shared/constant';
import axios from 'axios';
import "./MyfilterListExample.scss"
// import location from "../../assets/images/location-icon.svg"
import Popper from "@material-ui/core/Popper";
// import nearlocation from "../../assets/images/nearlocaion-icon.svg"
import { getLocationFromPlaceId, getLocationGeometryData } from '../../redux/actions/googleAction';
import { useDispatch, useSelector } from 'react-redux';

const styles = (theme) => ({
  popper: {
    maxWidth: "fit-content",
  }
});
const PopperMy = function (props) {
  return <Popper {...props} style={styles.popper} placement="bottom-start" />;
};

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

export default function MyfilterListExample(props) {
  const dispatch=useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);
  const [zzzz, setzzzz] = React.useState(true);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBWIIb5rlIPoxCKRCQlueENTkj2KcniU1I&libraries=places',
        document.querySelector('head'),
        'google-maps',
      );
    }

    loaded.current = true;
  }




  // React.useEffect(() => {
  //   if(props.coordinates){
  //        setInputValue(Restaurant_Location&&Restaurant_Location.location_data);
  //         }else{
  //     getMyLocation();
  //   }
  // }, [dispatch,props.coordinates])
 


  // const getMyLocation = () => {
  //   const location = window.navigator && window.navigator.geolocation
  //   if (location) {
  //     location.getCurrentPosition((position) => {
  //       console.log('Lat => ', {
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //       dispatch(getLocationGeometryData(` ${position.coords.latitude}, ${position.coords.longitude}` ))
  //           // setInputValue(Restaurant_Location&&Restaurant_Location.location_data);
  //     })
  //   }
  // }


  // let Restaurant_Location = useSelector((state) => {
  //   return state.googleData
  // })
// React.useEffect(() => {
  //   if(Restaurant_Location&&Restaurant_Location.location_data){
  //     setInputValue("")
  //   }
  // },[Restaurant_Location&&Restaurant_Location.location_data])
  
  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    [],
  );

 

  React.useEffect(() => {
    let active = true;
    
    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };

  }, [value, inputValue, fetch]);

  React.useEffect(() => {
    if(value&&value.place_id){
      dispatch(getLocationFromPlaceId(value&&value.place_id));
    }
  },[value])

  

  
  return (
    <React.Fragment>
      <div className="location-input-wrapper d-flex align-items-center">
        {/* <button>Detect My Location</button> */}
      <Autocomplete
      id="google-map-demo"
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params}  variant="standard" fullWidth placeholder="Enter Location Here" />
      )}
      renderOption={(option) => {
        const matches = option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match) => [match.offset, match.offset + match.length]),
        );

        return (
          <Grid container alignItems="center">
            <Grid item>
              {/* <LocationOnIcon className={classes.icon} /> */}
            </Grid>
            <div className="justify-content-center align-items-center d-flex">
            <Grid item xs>
              {parts.map((part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}

              <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
            </div>
          </Grid>
            );
          }}
        />
      </div>
      {/* {JSON.stringify(inputValue)} */}
      {/* {JSON.stringify(value&&value.place_id)} */}

      {/* {JSON.stringify(value) } */}

    </React.Fragment>
  );
}
