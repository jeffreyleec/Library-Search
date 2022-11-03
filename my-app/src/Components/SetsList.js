import React from "react";

import axios from "axios"
// import classNames from "classnames";
// import "components/Button.scss";

export default function SetLists(props) {
  //possible props: title, color
//3-TTGq-LIqI-EBRUo
//7dk5CapeFY

  // axios.get(`https://brickset.com/api/v3.asmx/checkKey?apiKey="3-TTGq-LIqI-EBRUo"`)
  // axios.get("/checkKey?apiKey=3-TTGq-LIqI-EBRUo")  //api checker
  // axios.get("/checkUserHash?apiKey=3-TTGq-LIqI-EBRUo&userHash=7dk5CapeFY") // checkUserHash

  // axios.get("/getSets?apiKey=3-TTGq-LIqI-EBRUo&userHash=7dk5CapeFY&params={'theme':'Architecture'}") 
  // // const test =axios.get(`/api/v3.asmx/getSets?apiKey="3-TTGq-LIqI-EBRUo"&userHash="7dk5CapeFY"&params={'theme':'space','year':'1978,1979'}`)
  // .then(function (response) {
  //   // handle success
  //   console.log(response)
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })

  axios.get("/getSets?apiKey=3-TTGq-LIqI-EBRUo&userHash=7dk5CapeFY&params={'theme':'Architecture', 'extendedData'='1'}") 
  // const test =axios.get(`/api/v3.asmx/getSets?apiKey="3-TTGq-LIqI-EBRUo"&userHash="7dk5CapeFY"&params={'theme':'space','year':'1978,1979'}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    console.log(error);
  })


  return (
    <p>data test </p>
  );
}