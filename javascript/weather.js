const Api = "3a2ef21543131a349054fd51f8512a2d";
const aa = document.querySelector("#weather");
let GeoInput = aa.querySelector("span:first-child");
let WeaInput = aa.querySelector("span:nth-child(2)");
let TempInput = aa.querySelector("span:last-child");
function GeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live in",  lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${Api}&units=metric`;
    fetch(url).then((response)=>response.json()).then((data)=>{
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        GeoInput.innerText = name;
        WeaInput.innerText = weather;
        TempInput.innerText = `${temp}'c`;
    });
}
function GeoError(){
    alert("Can't find your location!");
}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError);