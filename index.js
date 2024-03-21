let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

fetch("http://localhost:3000/countries")
.then(response => response.json())
.then(countries => {
    const nameOfCountry = document.querySelector("#nameOfCountry");
    countries.forEach(country => {
        const span = document.createElement("span");
        span.textContent = country.name;
        span.addEventListener("click", () => {displayCountriesDetails(country);});
        nameOfCountry.appendChild(span);
    });
    // displayCountriesDetails();
});


function displayCountriesDetails(country){
    document.querySelector("#countries-capital").textContent = country.capital;
    document.querySelector("#countries-language").textContent = country.language;
    document.querySelector("#countries-tipping").textContent = country.tipping;
    document.querySelector("#countries-hello").textContent = country.hello;
    document.querySelector("#countries-thankYou").textContent = country.thankYou;
    document.querySelector("#countries-passportVisa").textContent = country.passportVisa;
    document.querySelector("#countries-food").textContent = country.food;
}