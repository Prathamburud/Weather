const apiKey = "f698a3741420826ade2fba3c7cfb4258";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchinp");
const searchBtn = document.querySelector(".searchbtn");
const weatherIcon = document.querySelector(".weather-icon");

async function search(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "./heavy-rain.png";
        }
        else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "./heavy-rain.png";
        }
        else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "./clear.png";
        }
        else {
            weatherIcon.src = "./smoke.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    search(searchBox.value);
});