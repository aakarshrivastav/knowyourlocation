const button = document.getElementById("button-search") 
const input = document.getElementById("search-in")
const country =document.getElementById("country-name")
const city = document.getElementById("name")
const region = document.getElementById("region-name")
const cond= document.getElementById("condition-name")
const icoon=document.getElementById("temp-icon")
const toky = document.getElementById("tok")
const lond = document.getElementById("lon")
const  delh = document.getElementById("del")
const pars = document.getElementById("Par")
const ws= document.getElementById("wind-speed")
const bigt= document.getElementById("bigtemp")
const realf= document.getElementById("real-feel")
const hum= document.getElementById("humi")
const locbut = document.getElementById("location-botton")



async function getData(cityName){
const ab =await fetch(`http://api.weatherapi.com/v1/current.json?key=d3c9a6e0f45d472581852839251409 &q=${cityName}&aqi=yes`);
return await ab.json();

}
button.addEventListener("click" , async() => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    country.innerText= `${result.location.country}`
    city.innerText= `${result.location.name}`
    cond.innerText=`${result.current.condition.text}`
    ws.innerText=`${result.current.wind_kph}`
    bigt.innerText=`${result.current.temp_c}`
    realf.innerText=`${result.current.feelslike_c}`
    hum.innerText=`${result.current.humidity}`
    icoon.src= '113.jpg.webp'
 });

async function getNdata() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d3c9a6e0f45d472581852839251409&q=London&aqi=yes`);
    return await response.json();
}
lond.addEventListener("click", async() => {
    const rresult = await getNdata();
    console.log(rresult);
    country.innerText= `${rresult.location.country}`
    city.innerText= `${rresult.location.name}`
    cond.innerText=`${rresult.current.condition.text}`
    ws.innerText=`${rresult.current.wind_kph}`
    bigt.innerText=`${rresult.current.temp_c}`
    realf.innerText=`${rresult.current.feelslike_c}`
    hum.innerText=`${rresult.current.humidity}`

});

async function getN2data() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d3c9a6e0f45d472581852839251409&q=tokyo&aqi=yes`);
    return await response.json();
}
toky.addEventListener("click", async() => {
    const rresult = await getN2data();
    console.log(rresult);
    country.innerText= `${rresult.location.country}`
    city.innerText= `${rresult.location.name}`
    cond.innerText=`${rresult.current.condition.text}`
    ws.innerText=`${rresult.current.wind_kph}`
    bigt.innerText=`${rresult.current.temp_c}`
    realf.innerText=`${rresult.current.feelslike_c}`
    hum.innerText=`${rresult.current.humidity}`

});
async function getN3data() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d3c9a6e0f45d472581852839251409&q=mumbai&aqi=yes`);
    return await response.json();
}
delh.addEventListener("click", async() => {
    const rresult = await getN3data();
    console.log(rresult);
    country.innerText= `${rresult.location.country}`
    city.innerText= `${rresult.location.name}`
    cond.innerText=`${rresult.current.condition.text}`
    ws.innerText=`${rresult.current.wind_kph}`
    bigt.innerText=`${rresult.current.temp_c}`
    realf.innerText=`${rresult.current.feelslike_c}`
    hum.innerText=`${rresult.current.humidity}`

});
async function getN4data() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d3c9a6e0f45d472581852839251409&q=paris&aqi=yes`);
    return await response.json();
}
pars.addEventListener("click", async() => {
    const rresult = await getN4data();
    console.log(rresult);
    country.innerText= `${rresult.location.country}`
    city.innerText= `${rresult.location.name}`
    cond.innerText=`${rresult.current.condition.text}`
    ws.innerText=`${rresult.current.wind_kph}`
    bigt.innerText=`${rresult.current.temp_c}`
    realf.innerText=`${rresult.current.feelslike_c}`
    hum.innerText=`${rresult.current.humidity}`

});

function LocalTime(){ 
    const datee = new Date()
    const xy= `${datee.getHours()}:${datee.getMinutes()}:${datee.getSeconds()}`
    const time= document.getElementById("timee")
    time.innerText=xy


}
LocalTime()
setInterval(LocalTime,1000)

function LocalDate(){
    const dayy= new Date()
    const yz=`${dayy.getDate},${dayy.getDate}`

}


