const city = document.querySelector("#city");
const button = document.querySelector("button");
const weather = document.querySelector(".weather");


button.addEventListener("click" , ()=>{
    axios(`http://api.weatherapi.com/v1/current.json?key=608de1dbc4d647ffa72191655242204&q=${city.value}`)
.then((res)=>{
    console.log(res.data);
    weather.innerHTML = `
    <img class="icon" src="${res.data.current.condition.icon}">
    <h1 class="box-content temp">${res.data.current.temp_c} °C</h1>
    <h1 class="box-content condition">${res.data.current.condition.text}</h1>
    <h1 class="box-content location">${res.data.location.name}</h1>
    <div class="flex box-content">
    <div>       
    <h1><i class="fa-solid fa-droplet"></i> ${res.data.current.humidity} %</h1>
    <h3>Humidity</h3>
    </div>
    <div>
    <h1><i class="fa-solid fa-wind"></i> ${res.data.current.wind_kph} Km/H</h1>
    <h3>Wind Speed</h3>
    </div>
    </div>
    `
})
.catch((err)=>{
    weather.innerHTML = `
    <h1 class="box-content error">Location not detected</h1>
    `;
})

city.value = ""
})




