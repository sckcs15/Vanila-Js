function onGeoOk(position){
    console.log(position);
    const lat =position.coordds.longitude;
    const lng =position.coordds.longitude;
    console.log("You live in", lat , lng);
}
function onGeoError(){
    alert("Can't finc tou. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);