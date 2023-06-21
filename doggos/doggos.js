const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
        .then(function (response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function (processedResponse) {
            const img = document.createElement("img");
            const imgWrap = document.createElement("div");
            img.src = processedResponse.message;
            img.alt = "Cute doggo";
            doggos.prepend(imgWrap);
            imgWrap.prepend(img);
            
        });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);