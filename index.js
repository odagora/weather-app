const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");

const apiKey = "95c34dd0a87849a370c411d72886b952";

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;

    //Ajax Request
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    //Using async/await
    (async function fetchData() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch {
            msg.textContent = "Please search for a valid city 😩";
        }
    }());
});

