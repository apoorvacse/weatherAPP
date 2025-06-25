const apiKey="aa565449b45d7f4d06af90387a08ceb5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");



async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  // check for invalid city name

  if(response.status === 404){
    document.querySelector(".error").style.display = " block";
    document.querySelector(".weather").style.display = " none";
  }

  else{
    var data = await response.json();


  document.querySelector(".city").innerHTML= data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
  document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

  // to change weather icon acc to temp
    if(data.weather[0].main==="Clouds"){
      weatherIcon.src="images/cloud.jpeg";
    }
    else if(data.weather[0].main==="Rain"){
      weatherIcon.src="images/rainy.jpeg";
    }
    else if(data.weather[0].main==="Clear"){
      weatherIcon.src="images/clearsky.jpeg";
    }
    else if(data.weather[0].main==="Drizzle"){
      weatherIcon.src="images/drizzle.jpeg";
    }
    else if(data.weather[0].main==="Humid"){
      weatherIcon.src="images/humid.jpeg";
    }
    else if(data.weather[0].main==="Mist"){
      weatherIcon.src="images/mist.jpeg";
    }
    else if(data.weather[0].main==="Wind"){
      weatherIcon.src="images/wind.jpeg";
    }

  document.querySelector(".weather").style.display="block";
  // error message will be hidden while displaying data
  document.querySelector(".error").style.display="none";



  }

  
}

  searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
  })