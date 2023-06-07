async function fetchFlower() {
    const data = await fetch("http://localhost:8080/flower");
    // console.log(data);
    const dataJson = await data.json();
    const flowerSection = document.getElementById("flowerSection");
        // console.log(data);
    for (const flower of dataJson){
        const el = document.createElement("div");
        console.log(flower);
        el.innerHTML += "------------<br/>";
        for(const property in flower) {
            console.log(property);
            el.innerHTML += `${property} of this flower is: ${flower[property]}<br/> `;
        }

        el.innerHTML += "------------<br/>";
        flowerSection.appendChild(el);
    }
}

fetchFlower();


async function postFlower(event){
    event.preventDefault();
    const speciesInput = document.getElementById("SpeciesInput");
    const colorInput = document.getElementById("ColorInput");

    const species = speciesInput.value;
    const color = colorInput.value;

    const flowerDTO = {
        species,
        color 
    }

    const initialRequestObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json"

        },
        body: JSON.stringify(flowerDto)
    }


    await fetch("http://localhost:8080/flower", initialRequestObj);

    await fetchFlower();
}

const form = document.getElementById("flowerContainer");

form.addEventListener("submit", postFlower)


















