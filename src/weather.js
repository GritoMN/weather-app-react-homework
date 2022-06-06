import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = `f1396ff9da501a83ff2b7fb3c4589098`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&apiKey=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
}
