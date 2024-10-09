const inputName = document.querySelector("input#name-input");
const outputName = document.querySelector("span#name-output");
inputName.addEventListener("input", (event) => {
    const eventValue = String(event.currentTarget.value).trim();
    if (eventValue != false) outputName.textContent = eventValue;
    else if (!eventValue) outputName.textContent = "Anonymous";
});