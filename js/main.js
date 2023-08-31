const elHeader = document.querySelector(".site-header");
const elModeBtn = document.querySelector(".site-header__mode-controller");
const elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".form__input");
const elList = document.querySelector(".js-list");

const renderCountries = (array) => {
    elList.innerHTML = "";
    array.forEach((item) => {
        
        const liEelement = document.createElement("li");
        liEelement.classList.add("hero__items");
        
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", item.img);
        imgElement.setAttribute("alt", item.name);
        imgElement.classList.add("hero__img");
        
        const innerElement = document.createElement("div");
        innerElement.classList.add("hero__inner");
        
        const titleElement = document.createElement("h2");
        titleElement.classList.add("hero__title");
        titleElement.textContent = item.name;
        
        const populationElement = document.createElement("p");
        populationElement.classList.add("hero__population");
        populationElement.innerHTML = `<strong>Population:</strong> ${item.population}`;
        
        const regionElement = document.createElement("p");
        regionElement.classList.add("hero__region");
        regionElement.innerHTML = `<strong>Region:</strong> ${item.region}`;
        
        const capitalElement = document.createElement("p");
        capitalElement.classList.add("hero__capital");
        capitalElement.innerHTML = `<strong>Capital:</strong> ${item.capital}`;

        const moreAbout = document.createElement("button");
        moreAbout.classList.add("hero__link");
        moreAbout.textContent = "More About";
        moreAbout.dataset.id = item.id;
        moreAbout.setAttribute("data-bs-toggle", "modal");
        moreAbout.setAttribute("data-bs-target", "#exampleModal");
        
        
        liEelement.append(imgElement, innerElement);
        innerElement.append(titleElement, populationElement, regionElement, capitalElement, moreAbout);
        elList.appendChild(liEelement);
    });
};
renderCountries(countries);

elInput.addEventListener("keyup", (evt) => {
    evt.preventDefault();
    
    const inputValue = elInput.value.trim().toLowerCase();
    
    const filtered = countries.filter((item) => {
        const searchValue = item.name.toLowerCase();
        return searchValue.includes(inputValue);
    });
    
    renderCountries(filtered);
});

const modalTitle = document.querySelector(".modal-title");
const modalPop = document.querySelector(".hero__population");
const modalReg = document.querySelector(".hero__region");
const modalCap = document.querySelector(".hero__capital");

elList.addEventListener("click", (evt) => {
    if(evt.target.matches(".modal-btn")) {
        const btnId = evt.target.dataset.id;

        const foundCountry = countries.find((item) => {
            return item.id == btnId;
        });

        modalTitle.textContent = foundCountry.name;
    }
});

function darkMode() {
    document.body.classList.add("dark");
    localStorage.setItem("mode", "dark");
    elModeBtn.textContent = "Light Mode";
}

function ligthMode() {
    document.body.classList.remove("dark");
    localStorage.setItem("mode", "light");
    elModeBtn.textContent = "Dark Mode";
}

if (localStorage.getItem("mode") == "dark") {
    darkMode();
} else {
    ligthMode();
}

elModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  
    if (document.body.classList.contains("dark")) {
        darkMode();
    } else {
        ligthMode();
    }
});