async function name(city){
    let API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d069631b61d372d2259b052c82387e09`)
    let data = await API.json()
    

    if (data.cod === 200) {
        
        document.getElementById("city_ht").innerHTML = data.name
        document.getElementById("temp_ht").innerHTML = (data.main.temp - 273.15).toFixed(2)
        document.getElementById("min_ht").innerHTML = (data.main.temp_min - 273.15).toFixed(2)
        document.getElementById("max_ht").innerHTML = (data.main.temp_max - 273.15).toFixed(2)
        document.getElementById("weather_ht").innerHTML = data.weather[0].main
        document.getElementById("speed_ht").innerHTML = Math.floor(data.wind.speed)
        document.getElementById("humidity_ht").innerHTML = (data.main.humidity)
        document.getElementById("desc_ht").innerHTML = data.weather[0].description
        
        if(data.weather[0].main === "Mist" || data.weather[0].main === "Clouds"){
            document.getElementById("icon_ht").innerHTML = `<img src="./img/cloudy.png" style="width: 100px;">`
        
        }else if(data.weather[0].main === "Clear"){
            document.getElementById("icon_ht").innerHTML = `<img src="./img/sun_cloud.png" style="width: 100px;">`
        }else if(data.weather[0].main === "Rain"){
            document.getElementById("icon_ht").innerHTML = `<img src="./img/raining_cloud.png" style="width: 100px;">`
        }
        else{
            document.getElementById("icon_ht").innerHTML = `<img src="./img/sunny.png" style="width: 100px;">`
        }

        
    }else{
        alert("City not found");
        document.getElementById("city_name_ht").value = ""
    }


}
name("lucknow");

let btn = document.querySelector("#btn_ht")

btn.addEventListener("click",(e)=>{

    e.preventDefault();

    let input = document.getElementById("city_name_ht").value

    name(input)
})
