
import React, { useEffect, useRef, useState } from "react";
import "./MyfilterListExampleCopy.scss";
import { useDispatch } from "react-redux";
import { getLocationGeometryData } from "../../redux/actions/googleAction";

export default function MyfilterListExampleCopy() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const [initiate, setInitiate] = React.useState(false);

  

  useEffect(() => {
    if(inputValue&&inputValue.length>0&&inputValue&&inputValue.length<2){
      if(!initiate){
        initAutocomplete();
        // console.log("initAutocomplete")
        setInitiate(true)

      }
    }
    
  }, [inputValue,]);


  function debounce(func, wait, immediate) {
    let timeout;
    return function() {
      let context = this,
        args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function initAutocomplete() {

    // Create the search box and link it to the UI element.
    let inputContainer = document.querySelector('autocomplete-input-container');
    let autocomplete_results = document.querySelector('.autocomplete-results');
    let sessionToken = new window.google.maps.places.AutocompleteSessionToken();
    let service = new window.google.maps.places.AutocompleteService();
    // let geocoder = new window.google.maps.Geocoder();
  
  
    let displayPlacesSuggestions = function(predictions, status) {
      // console.log("displayPlacesSuggestions")
      if (status != window.google.maps.places.PlacesServiceStatus.OK) {
        alert(status);
        return;
      }
      autocomplete_results.classList.add("google");
      let results_html = [];
      predictions.forEach(function(prediction) {
        results_html.push(`<li class="autocomplete-item" data-type="place" data-place-id=${prediction.place_id}><span class="autocomplete-icon fa fa-map-marker-alt"></span>      			    <span class="autocomplete-text">${prediction.description}</span></li>`);
      });
      autocomplete_results.innerHTML = results_html.join("");
      autocomplete_results.style.display = 'block';
      let autocomplete_items = autocomplete_results.querySelectorAll('.autocomplete-item');
      for (let autocomplete_item of autocomplete_items) {
        autocomplete_item.addEventListener('click', function() {
          let prediction = {};
          const selected_text = this.querySelector('.autocomplete-text').textContent;

          const place_id = this.getAttribute('data-place-id');
          let request = {
            placeId: place_id,
            fields: ["address_components", "formatted_address", "geometry"]
          };
          let serviceDetails = new window.google.maps.places.PlacesService(autocomplete_results);

          // console.log(place_id)
         serviceDetails.getDetails(request, function(results, status) {
            if (status == 'OK') {
              const addressName = results.formatted_address;
              const addressData = results.address_components;
              const coordinates = results.geometry;
            //  console.log(results)
                if (results) {
                  const latlng = {
                    lat: coordinates.location.lat(),
                    lng: coordinates.location.lng(),
                  };
                  dispatch(
                    getLocationGeometryData(
                      addressData,
                      ` ${latlng.lat}, ${latlng.lng}`,
                      addressName
                    )
                  );

             
                }
             
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
            autocomplete_input.value = selected_text;
            setInputValue(selected_text);
            autocomplete_results.style.display = 'none';
          });
  
        })
      }
    };
    let autocomplete_input = document.getElementById('my-input-autocomplete');
    autocomplete_input.addEventListener('keyup', debounce(function() {
      let value = this.value;
      value.replace('"', '\\"').replace(/^\s+|\s+$/g, '');
      if (value !== ""&&value.length > 2) {
        service.getPlacePredictions({
             input: value,
             sessionToken: sessionToken
           }, displayPlacesSuggestions);
 
     } else {
        autocomplete_results.innerHTML = '';
        autocomplete_results.style.display = 'none';
      }
    }, 1500));
    
  }

  

  return (
    <React.Fragment>
      {/* {inputValue} */}
     <div className="myfilterlistexamplecopy-comp autocomplete-input-container">
      <div className="autocomplete-input">
        <input 
          className="my_filterlist_input form-control-inputtext form-control" 
          id="my-input-autocomplete" 
          onChange={(e)=>{setInputValue(e.target.value)}} 
          placeholder="Enter Location Here." 
          autoComplete="off"
           role="combobox"
           value={inputValue}
        />
        {inputValue&&
          <button type="button" className="cross_button" onClick={()=>{setInputValue('');document.querySelector('.autocomplete-results').style.display = 'none'}}>x</button>
        }
      </div>
        <ul className={`autocomplete-results `}>
        </ul>
       
    </div>
    </React.Fragment>
  );
}