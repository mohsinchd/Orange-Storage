import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import "@geoapify/geocoder-autocomplete/styles/round-borders.css";
import { useSelector } from "react-redux";

const AddUnitLocation = ({ getLocationData, id }) => {
  function onPlaceSelect(value) {
    getLocationData(value, id);
  }

  function onSuggectionChange(value) {
    console.log(value);
  }

  //   function preprocessHook(value) {
  //     return `${value}, Munich, Germany`;
  //   }

  //   function postprocessHook(feature) {
  //     return feature.properties.street;
  //   }

  //   function suggestionsFilter(suggestions) {
  //     const processedStreets = [];

  //     const filtered = suggestions.filter((value) => {
  //       if (
  //         !value.properties.street ||
  //         processedStreets.indexOf(value.properties.street) >= 0
  //       ) {
  //         return false;
  //       } else {
  //         processedStreets.push(value.properties.street);
  //         return true;
  //       }
  //     });

  //     return filtered;
  //   }

  return (
    <GeoapifyContext apiKey="a88698c29be445df993940c6904982f7">
      <GeoapifyGeocoderAutocomplete
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
      />
    </GeoapifyContext>

    // a88698c29be445df993940c6904982f7
  );
};

export default AddUnitLocation;
