const locbut = document.getElementById('live-location')
async function getData(lat,long){
    const ab =await fetch(`http://api.weatherapi.com/v1/current.json?key=d3c9a6e0f45d472581852839251409 &q=${lat},${long}&aqi=yes`);
    return await ab.json();
}

async function gotlocation(position) {
    const result = await gotlocation(
        position.coords.latitude,
        position.coords.longitude);
    console.log=(result);

    
}
async function failed() {
    console.log=("failed to get location")
    
}
locbut.addEventListener("click" , async () => {
navigator.geolocation.getCurrentPosition(gotlocation,failed)



});