/* const API_KEY = "16e99377cc91cec5ebd7ce0ef75a7718";
function onGeoOk(position){
    console.log(position);
    const lat =position.coords.latitude;
    const lng =position.coords.longitude;
    console.log("You live in", lat , lng);
  
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
        fetch(url).then(response => response.json()).then((data) => {
        const weather =document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");

            city.innerText = data.name;
        weather.innerText  = data.weather[0].main;

        });


    // fetch() => promise
}
function onGeoError(){
    alert("Can't finc tou. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); */